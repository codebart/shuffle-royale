import {Select} from '../../ui/Select';
import {Input} from '../../ui/Input';
import styled from 'styled-components';
import React from 'react';

const blinds: [number, number][] = [
    [1, 2],
    [2, 4],
    [5, 10],
    [10, 20],
    [25, 50],
    [100, 200],
    [250, 500],
    [500, 1000],
    [1000, 2500],
    [2500, 5000],
    [5000, 10000],
];

export const RoomsFilters = () => (
    <RoomsFiltersContainer>
        <h3>Filters</h3>
        <ul>
            <li>
                <label>Blinds:</label>
                <Select>{blinds.map(([small, big]: [number, number]) => <option>{small}/{big}</option>)}</Select>
            </li>
            <li>
                <label>Seats: </label>
                <Select>{new Array(10).fill(1).map((value, index) => <option>{index + 1}</option>)}</Select>
            </li>
            <li>
                <label>Players:</label>
                <Select>{new Array(10).fill(1).map((value, index) => <option>{index + 1}</option>)}</Select>
            </li>
            <li>
                <label>Total stacks:</label>
                <SignSelect>
                    <option>&gt;</option>
                    <option>&lt;</option>
                </SignSelect>
                <ValueInput type={'text'}/>
            </li>
            <li>
                <label>Buy in:</label>
                <SignSelect>
                    <option>&gt;</option>
                    <option>&lt;</option>
                </SignSelect>
                <ValueInput type={'text'}/>
            </li>
            <li>
                <Input type={'checkbox'}/> No Limit
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
