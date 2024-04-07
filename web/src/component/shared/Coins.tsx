import React from 'react';
import styled from 'styled-components';
import {abbreviated} from "../../model/chip.model";

export const CoinIcon = () => <CoinIconContainer>🪙</CoinIconContainer>;

const CoinIconContainer = styled.span`
  filter:  saturate(3) grayscale(1);
  font-size: 1rem;
`;

export const Coins = ({coins, locked}: { coins: number, locked?: number }) =>
    <CoinsContainer><CoinIcon/> {abbreviated(coins)} {locked ? `(🔒${abbreviated(locked)})` : ''}</CoinsContainer>;

const CoinsContainer = styled.span`
  letter-spacing: 0;
  font-size: 1em;
  filter: grayscale(1);
`;
