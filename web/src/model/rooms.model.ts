export type RoomsFiltersForm = {
    blinds: string | 'any';
    seats: number | 'any';
    players: number | 'any';
    totalStacks: number | 'any';
    totalStackOperator: '>' | '<';
    buyIn: number | 'any';
    buyInOperator: '>' | '<';
    noLimit: boolean;
}

export const initialRoomsFiltersForm: RoomsFiltersForm = {
    blinds: '1/2',
    seats: 'any',
    players: 'any',
    totalStacks: 'any',
    totalStackOperator: '<',
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