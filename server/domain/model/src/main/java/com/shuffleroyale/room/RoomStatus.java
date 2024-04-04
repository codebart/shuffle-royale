package com.shuffleroyale.room;

import com.shuffleroyale.coin.Coins;
import lombok.NonNull;

public record RoomStatus(
        @NonNull RoomId id,
        @NonNull Room.Settings settings,
        @NonNull Seats playingSeats,
        @NonNull Coins totalStacks
) {

    public Seats freeSeats() {
        return new Seats(settings.seats().number() - playingSeats.number());
    }

}
