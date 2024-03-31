package com.shuffleroyale.api.endpoint.rooms;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
class RoomListRestResource {

    @GetMapping("/rooms")
    ResponseEntity<RoomListResponse> takeSeat() {
        return ResponseEntity.ok().build();
    }

}
