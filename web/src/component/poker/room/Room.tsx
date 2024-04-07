import React from 'react';
import styled from 'styled-components';
import {useTranslation} from 'react-i18next';
import {useRoomState} from '../../../api/endpoint/roomState.get';
import {useParams} from 'react-router';
import {Loader} from '../../ui/Loader';
import {RoomStateError} from './RoomStateError';
import {Table} from './Table';
import {Player, Seat, Stage, TableState} from "../../../model/table.model";
import {RoomStateResponse} from "../../../api/model/roomState.model";
import {Card, NotShownCard} from "../../../model/card.model";
import {PlayerAction} from "../../../model/betting.model";

export const Room = () => {
    const {t} = useTranslation();
    const {id} = useParams();
    const roomState = useRoomState({roomId: Number(id)});
    return (
        <RoomContainer>
            <Header>
                <RoomId>{t('room.header')} #{id}</RoomId>
                {roomState.isSuccess && (
                    <RoomSettings>
                        <Setting>Blinds: {roomState.data.smallBlind}/{roomState.data.bigBlind}</Setting>
                        <Setting>Buy in: {roomState.data.buyIn}</Setting>
                        <Setting>{roomState.data.noLimit ? 'No limit' : 'Pot limit'}</Setting>
                    </RoomSettings>
                )}
            </Header>
            {roomState.isLoading && <Loader/>}
            {roomState.isSuccess && <Table roomId={Number(id)} state={tableState(roomState.data)}/>}
            {roomState.isError && !roomState.isLoading && <RoomStateError onRefresh={() => roomState.refetch()}/>}
        </RoomContainer>
    );
};

const tableState = (roomState: RoomStateResponse): TableState => {
    const seats = new Array<Seat>(roomState.seatsCount).fill({
        occupied: false
    });
    for (const seat of roomState.seats) {
        seats[seat.index] = {
            occupied: true,
            player: {
                name: seat.player.name,
                avatar: seat.player.avatar
            },
            stack: seat.stack,
            cards: [NotShownCard, NotShownCard],
            action: PlayerAction.NONE,
            actionValue: null,
        }
    }
    return {
        button: roomState.dealerButtonSeat,
        cards: [],
        seats: seats,
        seatsCount: 0,
        stage: Stage.WAITING
    };
};

const Header = styled.div`
  margin-bottom: 3rem;
`

const Setting = styled.div`
  font-weight: bold;
`

const RoomSettings = styled.div`
  display: flex;
  column-gap: 1rem;
  justify-content: space-around;
  
  div:nth-child(1), div:nth-child(2) {
    border-right: 1px solid ${({theme}) => theme.color.background.lightest};
    padding-right: 1rem;
  }
`

const RoomContainer = styled.div`
  width: calc(100% - 10rem);
  padding: 2rem 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6rem;
`;

const RoomId = styled.h1`
  font-weight: bold;
  font-size: 3rem;
  text-align: center;
`;
