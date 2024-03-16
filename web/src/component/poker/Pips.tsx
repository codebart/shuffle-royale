import React, {Component} from 'react';
import {Rank, Suit} from '../../model/Card';
import {SuitSymbol} from './Suit';
import {useMemo} from 'react';
import styled from 'styled-components';
import {numberPipComponentType} from './PipsTemplates';

const suitSymbols = (count: number, suit: Suit): JSX.Element[] => {
    return new Array(count).fill(<Pip><SuitSymbol suit={suit} size={'4rem'}/></Pip>);
};

const Pip = styled.div``;

const pipsComponent = (rank: Rank, suit: Suit): JSX.Element => {
    switch (rank) {
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            return <SuitSymbol suit={suit} size={'10rem'}/>;
        default:
            return React.createElement(numberPipComponentType[rank], {}, suitSymbols(rank, suit))
    }
};

export const Pips = ({rank, suit}: { rank: Rank, suit: Suit }): JSX.Element => {
    return useMemo(() => pipsComponent(rank, suit), [rank, suit]);
};