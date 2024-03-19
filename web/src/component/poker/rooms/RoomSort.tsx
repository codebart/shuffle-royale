import {Select} from '../../ui/Select';
import {Button} from '../../ui/Button';
import styled from 'styled-components';
import React from 'react';

enum SortBy {
    BLINDS = 'BLINDS',
    SEATS = 'SEATS',
    PLAYERS = 'PLAYERS',
    TOTAL_STACKS = 'TOTAL_STACKS',
    BUY_IN = 'BUY_IN',
    ID = 'ID'
}

enum SortDirection {
    ASC = 'ASC',
    DESC = 'DESC'
}

export const RoomsSort = () => (
    <RoomsSortContainer>
        <h3>Sort</h3>
        <label htmlFor={'sort'}>Sort by:</label>
        <Select name={'sort'} id={'sort'}>
            <option value={SortBy.BLINDS}>Blinds</option>
            <option value={SortBy.SEATS}>Seats</option>
            <option value={SortBy.PLAYERS}>Players</option>
            <option value={SortBy.TOTAL_STACKS}>Total stacks</option>
            <option value={SortBy.BUY_IN}>Buy in</option>
            <option value={SortBy.ID}>Id</option>
        </Select>
        <Button>ASC</Button>
    </RoomsSortContainer>
);

const RoomsSortContainer = styled.div`
  label {
    display: block;
    margin-bottom: 0.2rem;
  }
  
  select {
    margin-right: 0.5rem;
  }
`;
