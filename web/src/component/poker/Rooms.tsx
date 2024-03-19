import React from 'react';
import styled from 'styled-components';
import {Room} from '../../model/Room';
import {Button} from '../ui/Button';
import {Input} from '../ui/Input';
import {Select} from '../ui/Select';

export const Rooms = ({rooms}: { rooms: Room[] }) => (
    <RoomsContainer>
        <RoomsFilters/>
        <RoomsSort/>
        <RoomList rooms={rooms}/>
    </RoomsContainer>
);

const RoomsContainer = styled.div`
  padding: 2rem;
  max-width: 65rem;
`;

const RoomList = ({rooms}: { rooms: Room[] }) => (
    <RoomListContainer>
        <h3>Rooms</h3>
        <RoomUnorderedList>
            {rooms.map(room => <RoomView key={room.id} room={room}/>)}
            <CreateRoom/>
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

const RoomsFilters = () => (
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

const RoomsSort = () => (
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
  display: flex;
  column-gap: 0.5rem;
  border: 2px solid lightgray;
  border-bottom: none;
  padding: 0.5rem;
  align-items: center;
  
  button {
    max-width: 24rem;
    margin-left: auto;
  }

  div {
    border-right: 1px solid lightgray;
    padding-right: 0.5rem;
  }
`;

const RoomId = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
`;

const CreateRoom = () => (
    <CreateRoomContainer>
        <Button>Create</Button>
    </CreateRoomContainer>
);

const CreateRoomContainer = styled.li`
  border: 2px solid lightgray;
  border-bottom: none;
  display: flex;
  padding: 0.5rem;
`;