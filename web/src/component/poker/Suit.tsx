import {Suit, suitColor, suitSymbol} from '../../model/Card';
import styled from 'styled-components';
import React from 'react';

export const SuitSymbol = ({suit, size}: { suit: Suit, size: string }) => (
    <SuitSymbolContainer size={size} color={suitColor(suit)}>{suitSymbol(suit)}</SuitSymbolContainer>
);

type SuitProps = {
    color: string;
    size: string;
}

export const SuitSymbolContainer = styled.div<SuitProps>`
  color: ${({color}) => color};
  font-size: ${({size}) => size};
  line-height: 0;
`;