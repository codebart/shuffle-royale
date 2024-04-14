package com.shuffleroyale.api.endpoint.room.events;

import com.shuffleroyale.api.endpoint.Endpoint;
import com.shuffleroyale.room.RoomId;
import lombok.AccessLevel;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

@Endpoint
@RequiredArgsConstructor(access = AccessLevel.PACKAGE)
class RoomEventsSseEndpoint {

    @NonNull
    private final SseRoomEventNotificationService sseRoomEventNotificationService;

    @GetMapping(path = "/room/{roomId}/events", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    SseEmitter subscribe(@PathVariable("roomId") int roomId) {
        return sseRoomEventNotificationService.subscribe(new RoomId(roomId));
    }

}
