import React from 'react';
import {Rank, Suit, suitColor} from '../../model/Card';
import {SuitSymbol} from './Suit';
import {useMemo} from 'react';
import {numberPipComponentType, Pip} from './PipsTemplates';
import styled from 'styled-components';

const suitSymbols = (count: number, suit: Suit): JSX.Element[] => {
    return new Array(count).fill(<Pip><SuitSymbol suit={suit} size={'3em'}/></Pip>);
};

const pipsComponent = (rank: Rank, suit: Suit): JSX.Element => {
    switch (rank) {
        case 'J':
        case 'Q':
        case 'K':
            return <CenteredSymbol><RankLetter color={suitColor(suit)}>{rank}</RankLetter></CenteredSymbol>;
        case 'A':
            return <CenteredSymbol><SuitSymbol suit={suit} size={'8em'}/></CenteredSymbol>;
        default:
            return React.createElement(numberPipComponentType[rank], {}, suitSymbols(rank, suit))
    }
};

export const Pips = ({rank, suit}: { rank: Rank, suit: Suit }): JSX.Element => {
    return useMemo(() => pipsComponent(rank, suit), [rank, suit]);
};

type RankLetterProps = {
    color: string;
}

const RankLetter = styled.div<RankLetterProps>`
  font-size: 5em;  
  font-weight: bold;
  color: ${({color}) => color};
`

const CenteredSymbol = styled.div`
  padding-bottom: 1em;    
`