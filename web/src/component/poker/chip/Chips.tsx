import {ChipValue} from '../../../model/Chip';
import styled from 'styled-components';
import React from 'react';
import {ChipsStack} from './ChipsStack';

type ChipStacksNumber = {
    '10K': number;
    '1K': number;
    100: number;
    10: number;
    1: number;
}

const useChipStacks = (value: number): ChipStacksNumber => {
    const chips: Partial<ChipStacksNumber> = {};
    let chipCount = value;
    chips['10K'] = Math.floor(value / 10000);
    chipCount -= chips['10K'] * 10000;
    chips['1K'] = Math.floor(chipCount / 1000);
    chipCount -= chips['1K'] * 1000;
    chips[100] = Math.floor(chipCount / 100);
    chipCount -= chips[100] * 100;
    chips[10] = Math.floor(chipCount / 10);
    chipCount -= chips[10] * 10;
    chips[1] = Math.floor(chipCount);
    return chips as ChipStacksNumber;
};

export const Chips = ({value}: { value: number }) => {
    const stacks = useChipStacks(value);
    return (
        <ChipsContainer>
            {Object.entries(stacks)
                .filter(([, value]) => value)
                .map(([key, value]) => <ChipsStack chips={value} value={key as ChipValue}/>)}
        </ChipsContainer>
    );
};

const ChipsContainer = styled.div`
  display: flex;
  gap: 2rem;
`;
