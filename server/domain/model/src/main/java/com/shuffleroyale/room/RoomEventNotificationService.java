package com.shuffleroyale.room;

public interface RoomEventNotificationService {

    void notify(RoomId roomId, RoomEvent event);

}
