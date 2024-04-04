package com.shuffleroyale.api.endpoint.rooms;

import com.shuffleroyale.api.Mapper;
import com.shuffleroyale.room.Page;
import com.shuffleroyale.room.RoomList;
import com.shuffleroyale.room.RoomStatus;

import java.util.List;

@Mapper
class RoomListMapper {

    RoomListResponse map(RoomList roomList) {
        return new RoomListResponse(
                map(roomList.rooms()),
                map(roomList.page())
        );
    }

    private List<RoomStatusResponse> map(List<RoomStatus> rooms) {
        return rooms.stream()
                .map(this::map)
                .toList();
    }

    private RoomStatusResponse map(RoomStatus roomStatus) {
        return RoomStatusResponse.builder()
                .id(roomStatus.id().value())
                .smallBlind(roomStatus.settings().blinds().small().value())
                .bigBlind(roomStatus.settings().blinds().big().value())
                .freeSeats(roomStatus.freeSeats().number())
                .seatCount(roomStatus.settings().seats().number())
                .totalStacks(roomStatus.totalStacks().value())
                .buyIn(roomStatus.settings().buyIn().value())
                .noLimit(roomStatus.settings().noLimit())
                .build();
    }

    private PageResponse map(Page page) {
        return new PageResponse(
                page.size(),
                page.totalElements(),
                page.totalPages(),
                page.page()
        );
    }

}
