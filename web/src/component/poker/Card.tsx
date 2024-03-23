import React from 'react';
import styled from 'styled-components';
import {Card, FaceUpCard, suitColor} from 'model/card.model';
import {SuitSymbol} from './Suit';

const widthRatio: number = 0.64;
const heightRatio: number = 0.88;
const defaultSize: number = 285;

export const CardComponent = ({card, size = defaultSize}: { card: Card, size?: number }) => (
    <CardContainer size={size}>
        {card.shown ? <CardFront card={card}/> : <CardBack size={size}/>}
    </CardContainer>
);

type CardContainerProps = {
    size: number;
}

const CardContainer = styled.div<CardContainerProps>`
  border-radius: 7%;
  border: 3px solid lightgray;
  width: ${({size}) => size * widthRatio}px;
  height: ${({size}) => size * heightRatio}px;
  font-size: ${({size}) => size / defaultSize * 2.7}em;
  background-color: white;
`;

const CardFront = ({card}: { card: FaceUpCard }) => (
    <CardFrontContainer>
        <CardCornersContainer>
            <CardSuitRank card={card}/>
        </CardCornersContainer>
        <CardPipsContainer>
            <SuitSymbol suit={card.suit} size={'4.5em'}/>
        </CardPipsContainer>
    </CardFrontContainer>
);

const CardPipsContainer = styled.div`
  position: absolute;
  left: 1.7em;
  top: 4.5em;
  display: flex;
  height: 100%;
  width: 100%;
`;

const CardSuitRankContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.5em;
  margin-right: 0.5em;
  align-items: center;
`;

const CardCornersContainer = styled.div`
  display: flex;
  height: 100%;

  ${CardSuitRankContainer}:first-child {
    align-self: start;
  }
`;

const CardFrontContainer = styled.div`
  height: 100%;
  position: relative;
`;

const CardSuitRank = ({card}: { card: FaceUpCard }) => (
    <CardSuitRankContainer>
        <CardRank color={suitColor(card.suit)}>{card.rank}</CardRank>
        <SuitSymbol size={'2em'} suit={card.suit}/>
    </CardSuitRankContainer>
);

type CardRankProps = {
    color: string;
}

const CardRank = styled.div<CardRankProps>`
  font-weight: bold;
  font-size: 2em;
  margin-bottom: 0.2em;
  color: ${({color}) => color};
  letter-spacing: -2px;
`;

const CardBack = ({size}: { size: number }) => (
    <svg viewBox="0 0 64 88" height={size * heightRatio} width={size * widthRatio}>
        <path fill="#FF0000" stroke="none" d="m 5 5 l 0 78 l 54 0 l 0 -78 l -54 0 z"/>
        <path fill="#FFFFFF" stroke="none" d="m 8 8 l 0 72 l 48 0 l 0 -72 l -48 0 z"/>
        <path fill="#FF0000" stroke="none" d="m 11 11 l 0 66 l 42 0 l 0 -66 l -42 0 z"/>
    </svg>
);