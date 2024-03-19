export type Room = {
    id: number;
    smallBlind: number;
    bigBlind: number;
    seatCount: number;
    freeSeats: number;
    buyIn: number;
    totalStacks: number;
    noLimit: boolean;
}