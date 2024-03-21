import React from 'react';
import styled from 'styled-components';
import {ChipValue} from '../../../model/Chip';
import {ChipIcon} from './ChipIcon';

export const Chip = ({value}: { value: ChipValue }) => (
    <ChipContainer>
        <ChipIcon value={value}/>
        <ChipValueContainer>
            <b>{value}</b>
        </ChipValueContainer>
    </ChipContainer>
);

const ChipContainer = styled.div`
  position: relative;
`;

const ChipValueContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0.15rem;
  letter-spacing: 0;
  font-weight: bold;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.75rem;
  color: white;
  text-shadow: 0 0 3px #000000;
`;
