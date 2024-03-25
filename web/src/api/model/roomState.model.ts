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
    round: RoundStateResponse;
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

export type RoundStateResponse = {
    pots: number[];
    seats: RoundSeatStateResponse[];
    currentAction: number;
}

export type RoundSeatStateResponse = {
    index: number;
    playing: boolean;
    cards: boolean;
    action: PlayerAction;
    value?: number;
}

export enum PlayerAction {
    NONE = 'NONE',
    FOLD = 'FOLD',
    CHECK = 'CHECK',
    BET = 'BET',
    CALL = 'CALL',
    RAISE = 'RAISE',
    ALL_IN = 'ALL_IN'
}