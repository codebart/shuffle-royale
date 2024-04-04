package com.shuffleroyale.api.endpoint.rooms;

import java.util.List;

record RoomListResponse(List<RoomStatusResponse> rooms, PageResponse page) {
}
