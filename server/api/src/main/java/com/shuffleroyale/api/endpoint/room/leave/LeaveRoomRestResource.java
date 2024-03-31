package com.shuffleroyale.api.endpoint.room.leave;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
class LeaveRoomRestResource {

    @PostMapping("/room/{roomId}")
    ResponseEntity<?> leaveRoom(@PathVariable("roomId") int roomId) {
        return ResponseEntity.ok().build();
    }

}
