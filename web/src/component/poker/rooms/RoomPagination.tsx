import {Select} from '../../ui/Select';
import {Button} from '../../ui/Button';
import styled from 'styled-components';
import React from 'react';

const paginationOptions: number[] = [
    10,
    25,
    50,
    100,
    500
]

export const RoomPagination = () => (
    <RoomPaginationContainer>
        <span>Rows per page:</span>
        <Select>
            {paginationOptions.map((value) => <option key={value} value={value}>{value}</option>)}
        </Select>
        <span>1-10 of 35 rooms</span>
        <Button>&lt;</Button>
        <Button>&gt;</Button>
    </RoomPaginationContainer>
)

const RoomPaginationContainer = styled.li`
  display: flex;
  border: 2px solid lightgray;
  border-bottom: none;
  padding: 0.5rem;
  align-items: center;
  column-gap: 0.5rem;
  justify-content: center;
  
  span:first-child {
    font-size: 0.8rem;
  }
  
  button {
    width: 3rem;
    flex-grow: 0;
    font-weight: bold;
    color: #666666;
  }
`
