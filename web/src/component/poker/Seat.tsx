import React from 'react';
import styled from 'styled-components';
import {Avatar} from '../shared/Avatar';
import {PlayerSeat, Seat} from '../../model/Table';
import {Coins} from '../shared/Coins';
import {CardComponent} from './Card';

type SeatProps = {
    seat: Seat
}

export const SeatComponent = ({seat}: SeatProps) => {
    if (seat.occupied) {
        return <PlayerSeatComponent seat={seat}/>;
    }
    return <TakeSeat/>;
};

const TakeSeat = () => (
    <div>
        <i/>
        <div>
            Take seat
        </div>
    </div>
);

const PlayerSeatComponent = ({seat: {action, cards: [firstCard, secondCard], occupied, player}}: { seat: PlayerSeat }) => (
    <PlayerSeatBadgeContainer>
        <CardsContainer>
            <CardComponent size={100} card={firstCard}/>
            <CardComponent size={100} card={secondCard}/>
        </CardsContainer>
        <PlayerSeatContainer>
            <div>
                <PlayerName>{player.name}</PlayerName>
                <Coins coins={player.stack}/>
            </div>
            <Avatar url={player.avatar}/>
        </PlayerSeatContainer>
    </PlayerSeatBadgeContainer>
);

const PlayerSeatBadgeContainer = styled.div`
  position: relative;
`

const PlayerSeatContainer = styled.div`
  background-color: #DDDDDD;
  border-radius: 25px;
  border: 2px solid #CCCCCC;
  padding: 0.3rem 0.3rem 0.3rem 1rem;
  position: relative;
  display: flex;
  font-size: 1.2rem;
  text-align: center;
  width: 9rem;

  img {
    width: 3rem;
    margin-left: 1rem;
  }
`;

const PlayerName = styled.div`
  border-bottom: 1px solid darkgray;
  font-size: 1.4rem;
  font-weight: bold;
`

const CardsContainer = styled.div`
  position: absolute;
  display: flex;
  column-gap: 0.1rem;
  top: -60px;
  left: 40px;
  
  > div:first-child {
    transform: rotate(-10deg);
  }
  > div:nth-child(2) {
    transform: rotate(10deg);
    position: absolute;
    left: 50%;
  }
`