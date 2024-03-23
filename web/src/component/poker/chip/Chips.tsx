import {ChipCounts, chipValues, chipValueTypesAsc, chipValueTypesDesc} from '../../../model/chip.model';
import styled from 'styled-components';
import React from 'react';
import {ChipsStack} from './ChipsStack';

const useChipStacks = (value: number): ChipCounts => {
    const chips: Partial<ChipCounts> = {};
    let chipCount = value;
    for (const chipValueType of chipValueTypesDesc) {
        const count = Math.floor(chipCount / chipValues[chipValueType]);
        chips[chipValueType] = count;
        chipCount -= count * chipValues[chipValueType];
    }
    return chips as ChipCounts;
};

export const Chips = ({value}: { value: number }) => {
    const stacks = useChipStacks(value);
    return (
        <ChipsContainer>
            {chipValueTypesAsc.filter(key => stacks[key])
                .map(key => <ChipsStack key={key} chips={stacks[key]} value={key}/>)}
        </ChipsContainer>
    );
};

const ChipsContainer = styled.div`
  display: flex;
  gap: 2rem;
`;
