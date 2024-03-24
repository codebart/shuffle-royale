import {RoomModel} from 'model/room.model';
import {RoomPagination} from './RoomPagination';
import styled from 'styled-components';
import {Button} from 'component/ui/Button';
import React from 'react';
import {CreateRoom} from './create/CreateRoom';
import {useTranslation} from 'react-i18next';
import {Loader} from '../../ui/Loader';

export const RoomList = ({rooms, loading, error, onRefresh}: { rooms: RoomModel[], loading: boolean, error: boolean, onRefresh: () => void}) => {
    const {t} = useTranslation();
    return (
        <RoomListContainer>
            <h3>{t('rooms.list.header')}</h3>
            <RoomUnorderedList>
                {rooms.map(room => <RoomView key={room.id} room={room}/>)}
                {loading && (
                    <RoomsLoaderContainer>
                        <Loader/>
                    </RoomsLoaderContainer>
                )}
                {error && (
                    <RoomsErrorContainer>
                        ⚠ Failed to load rooms
                        <Button onClick={onRefresh}>⟳ Retry</Button>
                    </RoomsErrorContainer>
                )}
                <CreateRoom/>
                <RoomPagination totalElements={1}/>
            </RoomUnorderedList>
        </RoomListContainer>
    );
};

const RoomListContainer = styled.div`
  border-top: 2px solid ${({theme}) => theme.color.background.light};
  margin-top: 1rem;
`;

const RoomUnorderedList = styled.ul`
  margin: 0;
  padding: 0;
  
  li {
    list-style: none;
  }

  > li:last-child {
    border-bottom: 2px solid ${({theme}) => theme.color.background.light};
  }

  > li:nth-child(odd) {
    background-color: ${({theme}) => theme.color.background.dark};
  }
`;

const RoomsLoaderContainer = styled.li`
  border: 2px solid ${({theme}) => theme.color.background.light};
  border-bottom: none;
  padding: 0.5rem;
  font-size: 0.5rem;
`

const RoomsErrorContainer = styled.li`
  border: 2px solid ${({theme}) => theme.color.background.light};
  border-bottom: none;
  padding: 0.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const RoomView = ({room}: { room: RoomModel }) => (
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
  border: 2px solid ${({theme}) => theme.color.background.light};
  border-bottom: none;
  padding: 0.5rem;
  align-items: center;

  div {
    border-right: 1px solid ${({theme}) => theme.color.background.light};
    padding-right: 0.5rem;
  }
`;

const RoomId = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
`;
