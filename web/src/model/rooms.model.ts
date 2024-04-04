export const ANY = 'any';
export type Filter<T> = T | 'any';
export type ComparisonOperator =  '>' | '<' | '=';

export type RoomsFiltersForm = {
    blinds: Filter<string>;
    blindsOperator: ComparisonOperator;
    seats: Filter<number>;
    seatsOperator: ComparisonOperator;
    players: Filter<number>;
    playersOperator: ComparisonOperator;
    totalStacks: Filter<number>;
    totalStacksOperator: ComparisonOperator;
    buyIn: Filter<number>;
    buyInOperator: ComparisonOperator;
    noLimit: boolean;
}

export const initialRoomsFiltersForm: RoomsFiltersForm = {
    blinds: 'any',
    blindsOperator: '>',
    seats: 'any',
    seatsOperator: '>',
    players: 'any',
    playersOperator: '>',
    totalStacks: 'any',
    totalStacksOperator: '<',
    buyIn: 'any',
    buyInOperator: '<',
    noLimit: true
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

export type SortForm = {
    key: SortKey,
    direction: SortDirection
}

export const initialSortForm: SortForm = {
    key: SortKey.BLINDS,
    direction: SortDirection.ASC
}

export type RoomListForm = {
    filter: RoomsFiltersForm;
    sort: SortForm;
}

export const initialRoomListForm: RoomListForm = {
    filter: initialRoomsFiltersForm,
    sort: initialSortForm
}