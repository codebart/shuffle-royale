import styled from 'styled-components';
import React from 'react';
import {CardSuitRank} from './CardSuitRank';
import {FaceUpCard} from 'model/card.model';
import {CardSuitSymbol} from 'component/poker/card/CardSuitSymbol';

export const CardFront = ({card}: { card: FaceUpCard }) => (
    <CardFrontContainer>
        <CardCornersContainer>
            <CardSuitRank card={card}/>
        </CardCornersContainer>
        <CardPipsContainer>
            <CardSuitSymbol suit={card.suit} size={'4.5em'}/>
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

const CardCornersContainer = styled.div`
  display: flex;
  height: 100%;

  div:first-child {
    align-self: start;
  }
`;

const CardFrontContainer = styled.div`
  height: 100%;
  position: relative;
`;
