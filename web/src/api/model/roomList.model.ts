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

export type ComparisonOperator =  '>' | '<' | '=';

export type RoomsFiltersRequest = {
    blinds: string | null;
    blindsOperator: ComparisonOperator | null;
    seats: number | null;
    seatsOperator: ComparisonOperator | null;
    players: number | null;
    playersOperator: ComparisonOperator | null;
    totalStacks: number | null;
    totalStacksOperator: ComparisonOperator | null;
    buyIn: number | null;
    buyInOperator: ComparisonOperator | null;
    noLimit: boolean | null;
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