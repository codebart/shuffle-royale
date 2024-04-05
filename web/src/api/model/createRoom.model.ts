export type CreateRoomRequest = {
    blinds: string;
    seats: number;
    buyIn: number;
    noLimit: boolean | null;
}

export type CreateRoomResponse = {
    roomId: number;
}