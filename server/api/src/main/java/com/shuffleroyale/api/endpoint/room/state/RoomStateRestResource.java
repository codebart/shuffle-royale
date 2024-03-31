package com.shuffleroyale.api.endpoint.room.state;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
class RoomStateRestResource {

    @GetMapping("/room/{roomId}")
    ResponseEntity<RoomStateResponse> roomState(@PathVariable("roomId") int roomId) {
        return ResponseEntity.ok().build();
    }

}
