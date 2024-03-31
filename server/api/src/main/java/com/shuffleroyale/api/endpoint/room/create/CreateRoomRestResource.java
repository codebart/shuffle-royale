package com.shuffleroyale.api.endpoint.room.create;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
class CreateRoomRestResource {

    @PostMapping("/room/{roomId}")
    ResponseEntity<CreateRoomResponse> createRoom(@PathVariable("roomId") int roomId, @RequestBody CreateRoomRequest request) {
        return ResponseEntity.ok().build();
    }

}
