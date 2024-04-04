package com.shuffleroyale.api.endpoint.rooms;

record PageResponse(
        int size,
        int totalElements,
        int totalPages,
        int page
) {
}
