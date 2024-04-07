import {CardComponent} from 'component/poker/card/Card';
import {PlayerSeat} from 'model/table.model';
import {Coins} from 'component/shared/Coins';
import {Avatar} from 'component/shared/Avatar';
import styled from 'styled-components';
import {PlayerAction} from '../../../model/betting.model';

export const PlayerSeatComponent = ({seat: {action, actionValue, cards: [firstCard, secondCard], player, stack}}: { seat: PlayerSeat }) => (
    <PlayerSeatBadgeContainer>
        <CardsContainer>
            {firstCard && <CardComponent size={100} card={firstCard}/>}
            {secondCard && <CardComponent size={100} card={secondCard}/>}
        </CardsContainer>
        {action !== PlayerAction.NONE && (
            <ActionContainer>
                {action}
                {actionValue && <Coins coins={actionValue}/>}
            </ActionContainer>
        )}
        <PlayerSeatContainer>
            <div>
                <PlayerName>{player.name}</PlayerName>
                <Coins coins={stack}/>
            </div>
            <Avatar url={player.avatar}/>
        </PlayerSeatContainer>
    </PlayerSeatBadgeContainer>
);

const ActionContainer = styled.div`
  background-color: ${({theme}) => theme.color.primary.normal};
  border-radius: ${({theme}) => theme.borderRadius.medium};
  border: 2px solid ${({theme}) => theme.color.primary.dark};
  color: white;
  position: absolute;
  width: 8.3rem;
  padding: 2.5rem 1rem 0.5rem 1rem;
  top: 2rem;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  font-weight: bold;
  font-size: 1rem;
  flex-wrap: wrap;
`

const PlayerSeatBadgeContainer = styled.div`
  position: relative;
`

const PlayerSeatContainer = styled.div`
  background-color: ${({theme}) => theme.color.background.normal};
  border-radius: ${({theme}) => theme.borderRadius.medium};
  border: 2px solid ${({theme}) => theme.color.background.light};
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