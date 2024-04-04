package com.shuffleroyale.room;

public record Page(
        int size,
        int totalElements,
        int totalPages,
        int page
) {
}
