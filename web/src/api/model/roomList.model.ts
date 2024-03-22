import {PageResponse} from './pagination.model';

export type RoomListRequest = {
    filter: RoomsFiltersRequest;
    sort: Sort;
}

export enum SortKey {
    BLINDS = 'BLINDS',
    SEATS = 'SEATS',
    PLAYERS = 'PLAYERS',
    TOTAL_STACKS = 'TOTAL_STACKS',
    BUY_IN = 'BUY_IN',
    ID = 'ID'
}

export enum SortDirection {
    ASC = 'ASC',
    DESC = 'DESC'
}

export type Sort = {
    key: SortKey,
    direction: SortDirection
}

export type RoomsFiltersRequest = {
    blinds: string | 'any';
    seats: number | 'any';
    players: number | 'any';
    totalStacks: number | 'any';
    totalStackOperator: '>' | '<';
    buyIn: number | 'any';
    buyInOperator: '>' | '<';
    noLimit: boolean;
}

export type RoomListResponse = {
    rooms: Room[];
    page: PageResponse
}

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