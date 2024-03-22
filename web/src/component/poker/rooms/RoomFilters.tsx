import {Select} from '../../ui/Select';
import {Input} from '../../ui/Input';
import styled from 'styled-components';
import React from 'react';
import {blinds} from '../../../model/Room';

type RoomsFiltersParameters = {
    blinds: string | 'any';
    seats: number | 'any';
    players: number | 'any';
    totalStacks: number | 'any';
    totalStackOperator: '>' | '<';
    buyIn: number | 'any';
    buyInOperator: '>' | '<';
    noLimit: boolean;
}

export const RoomsFilters = () => (
    <RoomsFiltersContainer>
        <h3>Filters</h3>
        <ul>
            <li>
                <label>Blinds:</label>
                <Select>
                    <option>any</option>
                    {blinds.map(([small, big]: [number, number]) => <option key={`${small}/${big}`}>{small}/{big}</option>)}
                </Select>
            </li>
            <li>
                <label>Seats: </label>
                <Select>
                    <option>any</option>
                    {new Array(9).fill(1).map((value, index) => <option key={index + 2}>{index + 2}</option>)}
                </Select>
            </li>
            <li>
                <label>Players:</label>
                <Select>
                    <option>any</option>
                    {new Array(9).fill(1).map((value, index) => <option key={index + 2}>{index + 2}</option>)}
                </Select>
            </li>
            <li>
                <label>Total stacks:</label>
                <SignSelect>
                    <option>&gt;</option>
                    <option>&lt;</option>
                </SignSelect>
                <ValueInput type={'text'} defaultValue={'any'}/>
            </li>
            <li>
                <label>Buy in:</label>
                <SignSelect>
                    <option>&gt;</option>
                    <option>&lt;</option>
                </SignSelect>
                <ValueInput type={'text'} defaultValue={'any'}/>
            </li>
            <li>
                <Input type={'checkbox'} checked/> No Limit
            </li>
        </ul>
    </RoomsFiltersContainer>
);

const SignSelect = styled(Select)`
  width: 3rem;
  margin-right: 0.2rem;
`

const ValueInput = styled(Input)`
  width: 5rem;
`

const RoomsFiltersContainer = styled.div`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    
    > li {
      display: inline-block;
      margin-right: 0.5rem;
      padding-right: 0.5rem;
    }

    li:last-child {
      border-right: none;
    }
    
  }
  
  label {
    display: block;
    margin-bottom: 0.2rem;
  }
`;
