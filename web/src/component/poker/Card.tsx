import React from 'react';
import styled from 'styled-components';
import {Card, FaceUpCard, Suit, suitColor} from '../../model/Card';
import {SuitSymbol} from './Suit';
import {Pips} from './Pips';

export const CardComponent = ({card}: { card: Card }) => (
    <CardContainer>
        {card.shown ? <CardFront card={card}/> : <CardBack/>}
    </CardContainer>
);

const CardContainer = styled.div`
  border-radius: 15px;
  border: 3px solid lightgray;
  width: 12.8rem;
  height: 17.6rem;
  margin: 2rem;
  background-color: white;
`;

const CardFront = ({card}: { card: FaceUpCard }) => (
    <CardFrontContainer>
        <CardCornersContainer>
            <CardSuitRank card={card}/>
            <CardSuitRank card={card}/>
        </CardCornersContainer>
        <CardPipsContainer>
            <Pips {...card}/>
        </CardPipsContainer>
    </CardFrontContainer>
);

const CardPipsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CardSuitRankContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  align-items: center;
`;

const CardCornersContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  ${CardSuitRankContainer}:nth-child(1) {
    align-self: start;
  }

  ${CardSuitRankContainer}:nth-child(2) {
    transform: rotate(180deg);
    align-self: end;
  }
`

const CardFrontContainer = styled.div`
  height: 100%;
  position: relative;
`;

const CardSuitRank = ({card}: { card: FaceUpCard }) => (
    <CardSuitRankContainer>
        <CardRank color={suitColor(card.suit)}>{card.rank}</CardRank>
        <SuitSymbol size={'1.5rem'} suit={card.suit}/>
    </CardSuitRankContainer>
);

type CardRankProps = {
    color: string;
}

const CardRank = styled.div<CardRankProps>`
  font-weight: bold;
  font-size: 1.8rem;
  margin-bottom: 0.3rem;
  color: ${({color}) => color}
`;

const CardBack = styled.div`

`;
