package com.shuffleroyale.api.endpoint.room.events;

public interface RoomEventMessage {

    RoomEventType type();

    record PlayerTookSeatMessage(RoomEventType type, int index, long accountId) implements RoomEventMessage {
        public PlayerTookSeatMessage(int index, long accountId) {
            this(RoomEventType.PLAYER_TOOK_SEAT, index, accountId);
        }
    }

    record PlayerLeftSeatMessage(RoomEventType type, int index) implements RoomEventMessage {
        public PlayerLeftSeatMessage(int index) {
            this(RoomEventType.PLAYER_LEFT_SEAT, index);
        }
    }

}
