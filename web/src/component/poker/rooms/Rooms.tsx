import React from 'react';
import styled from 'styled-components';
import {Room} from '../../../model/Room';
import {RoomsSort} from './RoomSort';
import {RoomsFilters} from './RoomFilters';
import {RoomList} from './RoomList';

export const Rooms = ({rooms}: { rooms: Room[] }) => (
    <RoomsContainer>
        <RoomsFilters/>
        <RoomsSort/>
        <RoomList rooms={rooms}/>
    </RoomsContainer>
);

const RoomsContainer = styled.div`
  padding: 2rem;
`;
