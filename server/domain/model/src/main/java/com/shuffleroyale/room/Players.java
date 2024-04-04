package com.shuffleroyale.room;

public record Players(int number) {

    private static final int MIN_PLAYERS = 0;
    private static final int MAX_PLAYERS = 10;

    public Players {
        if (number < MIN_PLAYERS || number > MAX_PLAYERS) {
            throw new IllegalArgumentException("Invalid number of players: " + number);
        }
    }

}
