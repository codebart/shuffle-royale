import {ChipValue} from '../../../model/chip.model';
import styled from 'styled-components';
import React from 'react';
import {Chip} from './Chip';

export const ChipsStack = ({chips, value}: { chips: number, value: ChipValue }) => {
    const chipsStack = [];
    for (let i = 0; i < chips; i++) {
        chipsStack.push(
            <ChipInStackContainer index={i} key={i}>
                <Chip value={value}/>
            </ChipInStackContainer>
        );
    }
    return (
        <ChipsStackContainer>
            {chipsStack}
        </ChipsStackContainer>
    );
};

const ChipsStackContainer = styled.div`
  position: relative;
`;

type ChipInStackContainerProps = {
    index: number;
}

const ChipInStackContainer = styled.div<ChipInStackContainerProps>`
  position: absolute;
  bottom: ${({index}) => index * 5}px;
`;