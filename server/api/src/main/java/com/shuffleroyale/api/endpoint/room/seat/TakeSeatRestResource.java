package com.shuffleroyale.api.endpoint.room.seat;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
class TakeSeatRestResource {

    @PostMapping("/room/{roomId}/seat/{seatIndex}/take")
    ResponseEntity<?> takeSeat(@PathVariable("roomId") int roomId, @PathVariable("seatIndex") int seatIndex) {
        return ResponseEntity.ok().build();
    }

}
