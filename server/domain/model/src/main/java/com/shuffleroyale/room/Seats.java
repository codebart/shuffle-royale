package com.shuffleroyale.room;

public record Seats(int number) {

    private static final int MIN_SEATS = 2;
    private static final int MAX_SEATS = 10;

    public Seats {
        if (number < MIN_SEATS || number > MAX_SEATS) {
            throw new IllegalArgumentException("Invalid number of seats: " + number);
        }
    }

}
