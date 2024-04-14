package com.shuffleroyale.api.endpoint.room.events;

import com.shuffleroyale.api.Mapper;
import com.shuffleroyale.room.RoomEvent;

@Mapper
class RoomEventMapper {

    RoomEventMessage map(RoomEvent event) {
        return switch (event) {
            case RoomEvent.PlayerLeftSeat playerLeftSeat -> map(playerLeftSeat);
            case RoomEvent.PlayerTookSeat playerTookSeat -> map(playerTookSeat);
        };
    }

    private RoomEventMessage map(RoomEvent.PlayerLeftSeat playerLeftSeat) {
        return new RoomEventMessage.PlayerLeftSeatMessage(playerLeftSeat.index().index());
    }

    private RoomEventMessage map(RoomEvent.PlayerTookSeat playerTookSeat) {
        return new RoomEventMessage.PlayerTookSeatMessage(playerTookSeat.index().index(), playerTookSeat.accountId().value());
    }

}
