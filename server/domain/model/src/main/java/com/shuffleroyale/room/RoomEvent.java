package com.shuffleroyale.room;

import com.shuffleroyale.account.AccountId;

public sealed interface RoomEvent {

    record PlayerTookSeat(SeatIndex index, AccountId accountId) implements RoomEvent {
    }

    record PlayerLeftSeat(SeatIndex index) implements RoomEvent {
    }

}
