import {ChipCounts, chipValues, chipValueTypesAsc, chipValueTypesDesc} from 'model/chip.model';
import styled from 'styled-components';
import React from 'react';
import {ChipsStack} from './ChipsStack';

const useChipText = (value: number): string => {
    if (value >= 1000000 && value % 100000 === 0) {
        return `${value / 1000000}M`
    } else if (value >= 1000 && value % 100 === 0) {
        return `${value / 1000}K`;
    }
    return String(value);
};

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
    const text = useChipText(value);
    return (
        <ChipsContainer>
            <ChipStacksContainer>
                {chipValueTypesAsc.filter(key => stacks[key])
                    .map(key => <ChipsStack key={key} chips={stacks[key]} value={key}/>)}
            </ChipStacksContainer>
            <ChipsValue>
                {text}
            </ChipsValue>
        </ChipsContainer>
    );
};

const ChipsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChipStacksContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const ChipsValue = styled.span`
  text-shadow: 0 0 3px #000000;
  font-weight: bold;
  margin-left: 50%;
`