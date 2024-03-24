export type SeatAlign = 'start' | 'end' | 'center';

export type SeatPositions = {
    [seats: number]: SeatPosition[]
}

export type SeatPosition = {
    col: number;
    row: number;
    align: SeatAlign;
    justify: SeatAlign;
}

export const seatPositions: SeatPositions = {
    [2]: [
        {col: 3, row: 3, align: 'end', justify: 'center'},
        {col: 3, row: 1, align: 'start', justify: 'center'}
    ],
    [3]: [
        {col: 3, row: 3, align: 'end', justify: 'center'},
        {col: 1, row: 1, align: 'center', justify: 'end'},
        {col: 5, row: 1, align: 'center', justify: 'start'}
    ],
    [4]: [
        {col: 3, row: 3, align: 'end', justify: 'center'},
        {col: 1, row: 2, align: 'center', justify: 'start'},
        {col: 3, row: 1, align: 'start', justify: 'center'},
        {col: 5, row: 2, align: 'center', justify: 'end'}
    ],
    [5]: [
        {col: 3, row: 3, align: 'end', justify: 'center'},
        {col: 1, row: 2, align: 'center', justify: 'start'},
        {col: 2, row: 1, align: 'start', justify: 'end'},
        {col: 4, row: 1, align: 'start', justify: 'start'},
        {col: 5, row: 2, align: 'center', justify: 'end'}
    ],
    [6]: [
        {col: 3, row: 3, align: 'end', justify: 'center'},
        {col: 1, row: 3, align: 'start', justify: 'start'},
        {col: 1, row: 1, align: 'center', justify: 'end'},
        {col: 3, row: 1, align: 'start', justify: 'center'},
        {col: 5, row: 1, align: 'center', justify: 'start'},
        {col: 5, row: 3, align: 'start', justify: 'end'},
    ],
    [7]: [
        {col: 3, row: 3, align: 'end', justify: 'center'},
        {col: 1, row: 3, align: 'center', justify: 'end'},
        {col: 1, row: 2, align: 'start', justify: 'center'},
        {col: 2, row: 1, align: 'start', justify: 'center'},
        {col: 4, row: 1, align: 'start', justify: 'center'},
        {col: 5, row: 2, align: 'start', justify: 'center'},
        {col: 5, row: 3, align: 'center', justify: 'start'},
    ],
    [8]: [
        {col: 3, row: 3, align: 'end', justify: 'center'},
        {col: 1, row: 3, align: 'center', justify: 'end'},
        {col: 1, row: 2, align: 'center', justify: 'start'},
        {col: 1, row: 1, align: 'center', justify: 'end'},
        {col: 3, row: 1, align: 'start', justify: 'center'},
        {col: 5, row: 1, align: 'center', justify: 'start'},
        {col: 5, row: 2, align: 'center', justify: 'end'},
        {col: 5, row: 3, align: 'center', justify: 'start'},
    ],
    [9]: [
        {col: 3, row: 3, align: 'end', justify: 'center'},
        {col: 1, row: 3, align: 'center', justify: 'end'},
        {col: 1, row: 2, align: 'center', justify: 'start'},
        {col: 1, row: 1, align: 'center', justify: 'end'},
        {col: 2, row: 1, align: 'start', justify: 'end'},
        {col: 4, row: 1, align: 'start', justify: 'start'},
        {col: 5, row: 1, align: 'center', justify: 'start'},
        {col: 5, row: 2, align: 'center', justify: 'end'},
        {col: 5, row: 3, align: 'center', justify: 'start'},
    ],
    [10]: [
        {col: 3, row: 3, align: 'end', justify: 'center'},
        {col: 1, row: 3, align: 'center', justify: 'end'},
        {col: 1, row: 2, align: 'center', justify: 'start'},
        {col: 1, row: 1, align: 'center', justify: 'end'},
        {col: 2, row: 1, align: 'start', justify: 'center'},
        {col: 3, row: 1, align: 'start', justify: 'center'},
        {col: 4, row: 1, align: 'start', justify: 'center'},
        {col: 5, row: 1, align: 'center', justify: 'start'},
        {col: 5, row: 2, align: 'center', justify: 'end'},
        {col: 5, row: 3, align: 'center', justify: 'start'},
    ]
}
