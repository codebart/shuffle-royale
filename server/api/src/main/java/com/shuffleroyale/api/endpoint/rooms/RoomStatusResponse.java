package com.shuffleroyale.api.endpoint.rooms;

import lombok.Builder;

@Builder
record RoomStatusResponse(
        int id,
        long smallBlind,
        long bigBlind,
        int seatCount,
        int freeSeats,
        long buyIn,
        long totalStacks,
        boolean noLimit
) {
}
