import React from 'react';
import styled from 'styled-components';

export const CoinIcon = () => <>🪙</>;

export const Coins = ({coins, locked}: { coins: number, locked?: number }) =>
    <CoinsContainer><CoinIcon/> {coins} (🔒 {locked})</CoinsContainer>;

const CoinsContainer = styled.span`
  letter-spacing: 0;
`;