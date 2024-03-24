export type RoomStateRequest = {
    roomId: number;
}

export type RoomStateResponse = {
    seats: RoomSeatResponse[];
    seatsCount: number;
    dealerButtonSeat: number;
    bigBlind: number;
    smallBlind: number;
    buyIn: number;
    noLimit: boolean;
}

export type RoomSeatResponse = {
    index: number;
    player: PlayerResponse;
}

export type PlayerResponse = {
    name: string;
    chips: number;
    avatar?: string;
}