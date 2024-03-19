import {Room} from '../../../model/Room';
import {RoomPagination} from './RoomPagination';
import styled from 'styled-components';
import {Button} from '../../ui/Button';
import React from 'react';
import {CreateRoom} from './CreateRoom';

export const RoomList = ({rooms}: { rooms: Room[] }) => (
    <RoomListContainer>
        <h3>Rooms</h3>
        <RoomUnorderedList>
            {rooms.map(room => <RoomView key={room.id} room={room}/>)}
            <CreateRoom/>
            <RoomPagination/>
        </RoomUnorderedList>
    </RoomListContainer>
);

const RoomListContainer = styled.div`
  border-top: 2px solid lightgray;
  margin-top: 1rem;
`;

const RoomUnorderedList = styled.ul`
  margin: 0;
  padding: 0;

  li:last-child {
    border-bottom: 2px solid lightgray;
  }

  li:nth-child(odd) {
    background-color: #DDDDDD;
  }
`;

const RoomView = ({room}: { room: Room }) => (
    <RoomViewContainer>
        <RoomId>#{room.id}</RoomId>
        <div><b>Blinds:</b> {room.smallBlind}/{room.bigBlind}</div>
        <div><b>Seats:</b> {room.seatCount - room.freeSeats}/{room.seatCount}</div>
        <div><b>Buy in:</b> {room.buyIn}</div>
        <div><b>Total stacks:</b> {room.totalStacks}</div>
        <div><b>{room.noLimit ? 'No' : 'Pot'} limit</b></div>
        <Button>Join</Button>
    </RoomViewContainer>
);

const RoomViewContainer = styled.li`
  display: grid;
  grid-template-columns: 1fr 3fr 2fr 2fr 4fr 2fr 3fr;
  column-gap: 0.5rem;
  border: 2px solid lightgray;
  border-bottom: none;
  padding: 0.5rem;
  align-items: center;

  div {
    border-right: 1px solid lightgray;
    padding-right: 0.5rem;
  }
`;

const RoomId = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
`;
