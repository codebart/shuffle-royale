import React from 'react';
import {Table} from './Table';
import styled from 'styled-components';
import {Stage, TableState} from 'model/table.model';
import {CardComponent} from './card/Card';
import {SeatComponent} from './seat/Seat';
import {Betting} from './Betting';
import {useTranslation} from 'react-i18next';
import {AutoBet} from './AutoBet';
import {PlayerAction} from '../../model/betting.model';
import {BlackRedLogo, Logo} from '../shared/Logo';

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
            occupied: false
        },
        {
            occupied: false
        },
        {
            occupied: false
        },
        {
            occupied: false
        },
        {
            occupied: false
        },
        {
            occupied: false
        },
        {
            occupied: false
        },
        {
            occupied: false
        },
    ],
    seatsCount: 3,
    stage: Stage.WAITING,
    cards: [

    ]
}

export const Room = () => {
    const {t} = useTranslation();
    return (
        <RoomContainer>
            <RoomId>{t('room.header')} #1234</RoomId>
            <TableLayout/>
            {/*<AutoBet/>*/}
            {/*<Betting actions={[*/}
            {/*    {action: PlayerAction.CHECK},*/}
            {/*    {action: PlayerAction.FOLD},*/}
            {/*    {action: PlayerAction.BET, min: 1000, max: 10000},*/}
            {/*]} pot={444}/>*/}
        </RoomContainer>
    );
};

const RoomContainer = styled.div`
  width: calc(100% - 10rem);
  padding: 2rem 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6rem;
`;

const RoomId = styled.h1`
  font-weight: bold;
  font-size: 3rem;
  margin-bottom: 3rem;
`;

const TableLayout = () => {
    const positions = seatPositions[table.seats.length];
    return (
        <TableContainer>
            <Table/>
            <LogoContainer>
                <BlackRedLogo/>
            </LogoContainer>
            <SharedCards>
                {table.cards.map((card, index) => <CardComponent key={index} size={120} card={card}/>)}
            </SharedCards>
            <SeatsContainer>
                {table.seats.map((seat, index) => <SeatLocation key={index} position={positions[index]}><SeatComponent roomId={0} index={index} seat={seat}/></SeatLocation>)}
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

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  opacity: 0.2;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  font-size: min(1vw, 0.9rem);
  
  div {
    border: none;
  }
`