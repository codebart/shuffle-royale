package com.shuffleroyale.api.endpoint.room.create;

import jakarta.validation.constraints.NotNull;
import lombok.Value;

@Value
class CreateRoomRequest {
    @NotNull
    Integer smallBlind;
    @NotNull
    Integer bigBlind;
    @NotNull
    Integer seats;
    @NotNull
    Integer buyIn;
    @NotNull
    Boolean noLimit;
}
