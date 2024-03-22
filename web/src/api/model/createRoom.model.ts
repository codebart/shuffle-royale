export type CreateRoomRequest = {
    blinds: string;
    seats: number;
    buyIn: number;
    noLimit: boolean;
}

export type CreateRoomResponse = {
    roomId: number;
}