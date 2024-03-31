package com.shuffleroyale.api.endpoint.room.action;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
class TakeActionRestResource {

    @PostMapping("/room/{roomId}/action/{action}")
    ResponseEntity<?> takeAction(
            @PathVariable("roomId") int roomId,
            @PathVariable("action") GameAction action,
            @RequestParam(value = "value", required = false) long value
    ) {
        return ResponseEntity.ok().build();
    }

}
