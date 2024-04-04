package com.shuffleroyale.room;

import com.shuffleroyale.coin.Coins;
import com.shuffleroyale.poker.Blinds;

public record RoomCriteria(Filters filters, Sort sort, Page page) {

    public record Filters(
            Filter<Blinds> blinds,
            Filter<Seats> seats,
            Filter<Players> players,
            Filter<Coins> totalStacks,
            Filter<Coins> buyIn,
            Filter<Boolean> noLimit
    ) {
    }

    public record Sort(SortKey sortKey, SortDirection direction) {
    }

    public record Page(int page, int elements) {
    }

}
