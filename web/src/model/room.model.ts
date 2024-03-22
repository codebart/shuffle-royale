export type RoomModel = {
    id: number;
    smallBlind: number;
    bigBlind: number;
    seatCount: number;
    freeSeats: number;
    buyIn: number;
    totalStacks: number;
    noLimit: boolean;
}

export const blinds: [number, number][] = [
    [1, 2],
    [2, 4],
    [5, 10],
    [10, 20],
    [25, 50],
    [100, 200],
    [250, 500],
    [500, 1000],
    [1000, 2500],
    [2500, 5000],
    [5000, 10000],
];
