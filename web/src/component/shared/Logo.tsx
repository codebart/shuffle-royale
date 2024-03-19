import React from 'react';
import styled from 'styled-components';

export const Logo = () => (
    <LogoContainer>
        <Red>♥</Red><Black>♣</Black><Red>Shuffle</Red><Black>Royale</Black><Red>♦</Red><Black>♠</Black>
    </LogoContainer>
);

const LogoContainer = styled.div`
  display: inline-flex;
  font-size: 4em;
  font-weight: bold;
  padding: 0.2em 0.5em;
  border-radius: 0.5em;
  border: 5px dotted #BBBBBB;
`;

const Red = styled.span`
  color: red;    
`

const Black = styled.span`
  color: black;  
`