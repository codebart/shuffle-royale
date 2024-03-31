package com.shuffleroyale.api.endpoint.room.events;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

@Controller
class RoomEventsSseResource {

    @GetMapping(path = "/room/{roomId}/events", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    SseEmitter subscribe(@PathVariable("roomId") int roomId) {
        return new SseEmitter(Long.MAX_VALUE);
    }

}
