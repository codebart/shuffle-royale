import React from 'react';
import {Table} from './Table';
import styled from 'styled-components';
import {PlayerAction, Stage, TableState} from '../../model/Table';
import {CardComponent} from './Card';
import {SeatComponent} from './Seat';
import {Betting} from './Betting';

type SeatAlign = 'start' | 'end' | 'center';

type SeatPositions = {
    [seats: number]: SeatPosition[]
}

type SeatPosition = {
    col: number;
    row: number;
    align: SeatAlign;
    justify: SeatAlign;
}

const seatPositions: SeatPositions = {
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

const table: TableState = {
    button: 0,
    seats: [
        {
            occupied: true,
            player: {
                name: 'Test',
                stack: 2137
            },
            cards: [        {
                suit: 'spades',
                rank: 'A',
                shown: true,
            },
                {
                    suit: 'hearts',
                    rank: 2,
                    shown: true,
                }],
            action: PlayerAction.ALL_IN,
            actionValue: 23524,
        },
        {
            occupied: true,
            player: {
                name: 'Test',
                stack: 2137
            },
            cards: [{shown: false}, {shown: false}],
            action: PlayerAction.CHECK,
            actionValue: null,
        },
        {
            occupied: true,
            player: {
                name: 'Test',
                stack: 2137
            },
            cards: [{shown: false}, {shown: false}],
            action: PlayerAction.BET,
            actionValue: 6363,
        },

        {
            occupied: true,
            player: {
                name: 'Test',
                stack: 2137
            },
            cards: [{shown: false}, {shown: false}],
            action: PlayerAction.FOLD,
            actionValue: null,
        },
        {
            occupied: true,
            player: {
                name: 'Test',
                stack: 2137
            },
            cards: [{shown: false}, {shown: false}],
            action: PlayerAction.CALL,
            actionValue: 23524,
        },
        {
            occupied: true,
            player: {
                name: 'Test',
                stack: 2137
            },
            cards: [{shown: false}, {shown: false}],
            action: PlayerAction.RAISE,
            actionValue: 44444,
        },
        {
            occupied: true,
            player: {
                name: 'Test',
                stack: 2137
            },
            cards: [{shown: false}, {shown: false}],
            action: PlayerAction.ALL_IN,
            actionValue: 23524,
        },
        {
            occupied: true,
            player: {
                name: 'Test',
                stack: 2137
            },
            cards: [{shown: false}, {shown: false}],
            action: PlayerAction.ALL_IN,
            actionValue: 23524,
        },
    ],
    seatsCount: 3,
    stage: Stage.WAITING,
    cards: [
        {
            suit: 'clubs',
            rank: 10,
            shown: true,
        },
        {
            suit: 'diamonds',
            rank: 'K',
            shown: true,
        },
        {
            suit: 'hearts',
            rank: 7,
            shown: true,
        },
        {
            suit: 'spades',
            rank: 'A',
            shown: true,
        },
        {
            suit: 'hearts',
            rank: 2,
            shown: true,
        }
    ]
}

export const Room = () => {
    return (
        <RoomContainer>
            <RoomId>Room #1234</RoomId>
            <TableLayout/>
            {/*<AutoBet/>*/}
            <Betting/>
        </RoomContainer>
    );
};

const RoomContainer = styled.div`
  width: calc(100% - 10rem);
  padding: 2rem;
  padding-left: 5rem;
  padding-right: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6rem;
`;

const RoomId = styled.div`
  font-weight: bold;
  font-size: 2rem;
`;

const TableLayout = () => {
    const positions = seatPositions[table.seats.length];
    return (
        <TableContainer>
            <Table/>
            <SharedCards>
                {table.cards.map(card => <CardComponent size={120} card={card}/>)}
            </SharedCards>
            <SeatsContainer>
                {table.seats.map((seat, index) => <SeatLocation position={positions[index]}><SeatComponent
                    seat={seat}/></SeatLocation>)}
            </SeatsContainer>
        </TableContainer>
    );
};

const TableContainer = styled.div`
  width: 100%;
  position: relative;
`;

const SharedCards = styled.div`
  position: absolute;
  top: 40%;
  left: 25%;
  display: flex;
  column-gap: 0.5rem;
`

const SeatsContainer = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  top: -10%;
  left: -10%;
  width: 120%;
  height: 120%;
`

type SeatLocationProps = {
    position: SeatPosition;
}

const SeatLocation = styled.div<SeatLocationProps>`
  grid-column: ${({position}) => position.col};
  grid-row: ${({position}) => position.row};
  align-self: ${({position}) => position.align};
  justify-self: ${({position}) => position.justify};
`