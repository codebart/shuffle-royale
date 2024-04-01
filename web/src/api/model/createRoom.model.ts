export type CreateRoomRequest = {
    smallBlind: string;
    bigBlind: string;
    seats: number;
    buyIn: number;
    noLimit: boolean;
}

export type CreateRoomResponse = {
    roomId: number;
}