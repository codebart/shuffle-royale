import {RoomModel} from '../../../model/room.model';
import {Button} from '../../ui/Button';
import styled from 'styled-components';
import React, {useCallback} from 'react';
import {abbreviated} from "../../../model/chip.model";

export const RoomView = ({room}: { room: RoomModel }) => {
    const onJoin = useCallback(() => window.open(`/room/${room.id}`, "_blank", "popup"), []);
    return (
        <RoomViewContainer>
            <RoomId>#{room.id}</RoomId>
            <div><b>Blinds:</b> {abbreviated(room.smallBlind)}/{abbreviated(room.bigBlind)}</div>
            <div><b>Seats:</b> {room.seatCount - room.freeSeats}/{room.seatCount}</div>
            <div><b>Buy in:</b> {abbreviated(room.buyIn)}</div>
            <div><b>Total stacks:</b> {abbreviated(room.totalStacks)}</div>
            <div><b>{room.noLimit ? 'No' : 'Pot'} limit</b></div>
            <Button onClick={onJoin}>Join</Button>
        </RoomViewContainer>
    );
};

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
