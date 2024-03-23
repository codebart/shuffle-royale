import {FaceUpCard, suitColor} from 'model/card.model';
import styled from 'styled-components';
import React from 'react';
import {CardSuitSymbol} from 'component/poker/card/CardSuitSymbol';

export const CardSuitRank = ({card}: { card: FaceUpCard }) => (
    <CardSuitRankContainer>
        <CardRank color={suitColor(card.suit)}>{card.rank}</CardRank>
        <CardSuitSymbol size={'2em'} suit={card.suit}/>
    </CardSuitRankContainer>
);

const CardSuitRankContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.5em;
  margin-right: 0.5em;
  align-items: center;
`;

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
