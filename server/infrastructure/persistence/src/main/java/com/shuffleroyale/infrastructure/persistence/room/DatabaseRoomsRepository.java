package com.shuffleroyale.infrastructure.persistence.room;

import com.shuffleroyale.coin.Coins;
import com.shuffleroyale.poker.Blinds;
import com.shuffleroyale.room.Filter;
import com.shuffleroyale.room.Page;
import com.shuffleroyale.room.Players;
import com.shuffleroyale.room.Room;
import com.shuffleroyale.room.RoomCriteria;
import com.shuffleroyale.room.RoomId;
import com.shuffleroyale.room.RoomList;
import com.shuffleroyale.room.RoomStatus;
import com.shuffleroyale.room.RoomsRepository;
import com.shuffleroyale.room.Seats;
import com.shuffleroyale.room.SortDirection;
import lombok.AccessLevel;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.jooq.Comparator;
import org.jooq.Condition;
import org.jooq.DSLContext;
import org.jooq.Field;
import org.jooq.Record1;
import org.jooq.Records;
import org.jooq.SortField;
import org.jooq.SortOrder;
import org.jooq.impl.DSL;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.Collection;
import java.util.List;
import java.util.Optional;
import java.util.function.Function;
import java.util.stream.Stream;

import static com.shuffleroyale.infrastructure.persistence.schema.tables.Account.ACCOUNT;
import static com.shuffleroyale.infrastructure.persistence.schema.tables.Room.ROOM;
import static com.shuffleroyale.infrastructure.persistence.schema.tables.Seat.SEAT;
import static org.jooq.impl.DSL.coalesce;
import static org.jooq.impl.DSL.count;
import static org.jooq.impl.DSL.sum;

@Repository
@RequiredArgsConstructor(access = AccessLevel.PACKAGE)
class DatabaseRoomsRepository implements RoomsRepository {

    private static final Field<Integer> SEATS = count(SEAT.ID);
    private static final Field<Integer> PLAYERS = count(ACCOUNT.ID);
    private static final Field<BigDecimal> STACKS = sum(coalesce((SEAT.STACK), 0L));

    record RoomStatusResult(
            int id,
            long smallBlind,
            long bigBlind,
            long buyIn,
            boolean noLimit,
            int seats,
            int players,
            BigDecimal stacks
    ) {
    }

    @NonNull
    private final DSLContext dslContext;

    @Override
    public RoomList roomList(RoomCriteria roomCriteria) {
        var roomStatusResults = fetchRoomStatuses(roomCriteria);
        var roomStatuses = roomStatusResults.stream()
                .map(result -> new RoomStatus(
                        new RoomId(result.id),
                        new Room.Settings(
                                new Seats(result.seats),
                                new Blinds(new Coins(result.smallBlind), new Coins(result.bigBlind)),
                                new Coins(result.buyIn),
                                result.noLimit
                        ),
                        new Seats(result.players),
                        new Coins(result.stacks.longValue())
                ))
                .toList();
        var total = fetchTotalRoomsCount(roomCriteria);
        var page = new Page(
                roomStatusResults.size(),
                total,
                total / roomCriteria.page().elements(),
                roomCriteria.page().page()
        );
        return new RoomList(roomStatuses, page);
    }

    private List<RoomStatusResult> fetchRoomStatuses(RoomCriteria roomCriteria) {
        return dslContext.select(
                        ROOM.ID,
                        ROOM.SMALL_BLIND,
                        ROOM.BIG_BLIND,
                        ROOM.BUY_IN,
                        ROOM.NO_LIMIT,
                        count(SEAT.ID).as(SEATS),
                        count(ACCOUNT.ID).as(PLAYERS),
                        sum(coalesce((SEAT.STACK), 0L)).as(STACKS)
                )
                .from(ROOM)
                .join(SEAT).on(SEAT.ROOM_ID.eq(ROOM.ID))
                .leftJoin(ACCOUNT).on(ACCOUNT.ID.eq(SEAT.ACCOUNT_ID))
                .groupBy(ROOM.ID)
                .having(filterCondition(roomCriteria))
                .orderBy(orderByFields(roomCriteria.sort()))
                .limit(roomCriteria.page().elements())
                .offset(roomCriteria.page().page() * roomCriteria.page().elements())
                .fetch(Records.mapping(RoomStatusResult::new));
    }

    private Condition filterCondition(RoomCriteria roomCriteria) {
        return conditions(roomCriteria)
                .flatMap(Optional::stream)
                .reduce(Condition::and)
                .orElse(DSL.trueCondition());
    }

    private Stream<Optional<Condition>> conditions(RoomCriteria roomCriteria) {
        return Stream.of(
                condition(ROOM.SMALL_BLIND, roomCriteria.filters().blinds(), blinds -> blinds.small().value()),
                condition(ROOM.BIG_BLIND, roomCriteria.filters().blinds(), blinds -> blinds.big().value()),
                condition(ROOM.BUY_IN, roomCriteria.filters().buyIn(), Coins::value),
                condition(ROOM.NO_LIMIT, roomCriteria.filters().noLimit(), Function.identity()),
                condition(SEATS, roomCriteria.filters().seats(), Seats::number),
                condition(PLAYERS, roomCriteria.filters().players(), Players::number),
                condition(STACKS, roomCriteria.filters().totalStacks(), coins -> new BigDecimal(coins.value()))
        );
    }

    private int fetchTotalRoomsCount(RoomCriteria roomCriteria) {
        return dslContext.select(count(ROOM.ID))
                .from(ROOM)
                .join(SEAT).on(SEAT.ID.eq(ROOM.ID))
                .leftJoin(ACCOUNT).on(ACCOUNT.ID.eq(SEAT.ACCOUNT_ID))
                .groupBy(ROOM.ID)
                .having(filterCondition(roomCriteria))
                .orderBy(orderByFields(roomCriteria.sort()))
                .fetchOptional()
                .map(Record1::value1)
                .orElse(0);
    }

    private Collection<? extends SortField<?>> orderByFields(RoomCriteria.Sort sort) {
        var fields = switch (sort.sortKey()) {
            case BLINDS -> List.of(ROOM.BIG_BLIND, ROOM.SMALL_BLIND);
            case SEATS -> List.of(SEATS);
            case PLAYERS -> List.of(PLAYERS);
            case TOTAL_STACKS -> List.of(STACKS);
            case BUY_IN -> List.of(ROOM.BUY_IN);
            case ID -> List.of(ROOM.ID);
        };
        var sortOrder = sortOrder(sort.direction());
        return fields.stream()
                .map(field -> field.sort(sortOrder))
                .toList();
    }

    private SortOrder sortOrder(SortDirection sortDirection) {
        return switch (sortDirection) {
            case ASC -> SortOrder.ASC;
            case DESC -> SortOrder.DESC;
        };
    }

    private <S, T> Optional<Condition> condition(Field<S> field, Filter<T> filter, Function<T, S> valueExtractor) {
        return switch (filter) {
            case Filter.Any<T> ignored -> Optional.empty();
            case Filter.Value<T> value -> Optional.of(condition(field, value, valueExtractor));
        };
    }

    private <S, T> Condition condition(Field<S> field, Filter.Value<T> filter, Function<T, S> valueExtractor) {
        return field.compare(
                comparator(filter.operator()),
                valueExtractor.apply(filter.value())
        );
    }

    private Comparator comparator(Filter.ComparisonOperator comparisonOperator) {
        return switch (comparisonOperator) {
            case GREATER -> Comparator.GREATER;
            case LOWER -> Comparator.LESS;
            case EQUAL -> Comparator.EQUALS;
        };
    }

}
