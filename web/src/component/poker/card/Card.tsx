import React from 'react';
import styled from 'styled-components';
import {Card} from 'model/card.model';
import {CardFront} from './CardFront';
import {CardBack} from './CardBack';
import {defaultSize, heightRatio, widthRatio} from './cardSize';

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
