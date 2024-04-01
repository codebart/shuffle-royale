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
    sortKey: SortKey,
    sortDirection: SortDirection
}

export type Filter<T> = T | 'any';
export type ComparisonOperator =  '>' | '<' | '=';

export type RoomsFiltersRequest = {
    blinds: Filter<string>;
    blindsOperator: ComparisonOperator;
    seats: Filter<number>;
    seatsOperator: ComparisonOperator;
    players: Filter<number>;
    playersOperator: ComparisonOperator;
    totalStacks: Filter<number>;
    totalStackOperator: ComparisonOperator;
    buyIn: Filter<number>;
    buyInOperator: ComparisonOperator;
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