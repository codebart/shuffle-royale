package com.shuffleroyale.api.endpoint.rooms;

import com.shuffleroyale.api.endpoint.Endpoint;
import com.shuffleroyale.coin.Coins;
import com.shuffleroyale.poker.Blinds;
import com.shuffleroyale.room.Filter;
import com.shuffleroyale.room.Players;
import com.shuffleroyale.room.RoomCriteria;
import com.shuffleroyale.room.RoomsService;
import com.shuffleroyale.room.Seats;
import com.shuffleroyale.room.SortDirection;
import com.shuffleroyale.room.SortKey;
import lombok.AccessLevel;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.function.Function;

@Endpoint
@RequiredArgsConstructor(access = AccessLevel.PACKAGE)
class RoomListEndpoint {

    @NonNull
    private final RoomsService roomsService;

    @NonNull
    private final RoomListMapper roomListMapper;

    @GetMapping("/rooms")
    ResponseEntity<RoomListResponse> roomList(
            @RequestParam(value = "blinds", required = false) BlindsParam blinds,
            @RequestParam(value = "blindsOperator", defaultValue = ">") Filter.ComparisonOperator blindsOperator,
            @RequestParam(value = "seats", required = false) Integer seats,
            @RequestParam(value = "seatsOperator", defaultValue = ">") Filter.ComparisonOperator seatsOperator,
            @RequestParam(value = "players", required = false) Integer players,
            @RequestParam(value = "playersOperator", defaultValue = ">") Filter.ComparisonOperator playersOperator,
            @RequestParam(value = "totalStacks", required = false) Long totalStacks,
            @RequestParam(value = "totalStacksOperator", defaultValue = ">") Filter.ComparisonOperator totalStacksOperator,
            @RequestParam(value = "buyIn", required = false) Long buyIn,
            @RequestParam(value = "buyInOperator", defaultValue = ">") Filter.ComparisonOperator buyInOperator,
            @RequestParam(value = "noLimit", required = false) Boolean noLimit,
            @RequestParam(value = "sortKey", defaultValue = "BLINDS") SortKey sortKey,
            @RequestParam(value = "sortDirection", defaultValue = "ASC") SortDirection sortDirection,
            @RequestParam(value = "page", defaultValue = "0") int page,
            @RequestParam(value = "elements", defaultValue = "10") int elements
    ) {
        var roomList = roomsService.roomList(new RoomCriteria(
                new RoomCriteria.Filters(
                        filter(blinds, blindsOperator, value -> new Blinds(new Coins(value.small()), new Coins(value.big()))),
                        filter(seats, seatsOperator, Seats::new),
                        filter(players, playersOperator, Players::new),
                        filter(totalStacks, totalStacksOperator, Coins::new),
                        filter(buyIn, buyInOperator, Coins::new),
                        filter(noLimit, Filter.ComparisonOperator.EQUAL, Function.identity())
                ),
                new RoomCriteria.Sort(sortKey, sortDirection),
                new RoomCriteria.Page(page, elements)
        ));
        return ResponseEntity.ok()
                .body(roomListMapper.map(roomList));
    }

    private <S, T> Filter<T> filter(S value, Filter.ComparisonOperator operator, Function<S, T> mappingFunction) {
        return switch (value) {
            case null -> Filter.any();
            case S ignored -> new Filter.Value<>(operator, mappingFunction.apply(value));
        };
    }

}
