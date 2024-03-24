import React from 'react';
import styled from 'styled-components';
import {useTranslation} from 'react-i18next';
import {useRoomState} from '../../../api/endpoint/roomState.get';
import {useParams} from 'react-router';
import {Loader} from '../../ui/Loader';
import {RoomStateError} from './RoomStateError';
import {Table} from './Table';

export const Room = () => {
    const {t} = useTranslation();
    const {id} = useParams();
    const roomState = useRoomState({ roomId: Number(id) });
    return (
        <RoomContainer>
            <RoomId>{t('room.header')} #{id}</RoomId>
            {roomState.isLoading && <Loader/>}
            {roomState.isSuccess && <Table/>}
            {roomState.isError && !roomState.isLoading && <RoomStateError onRefresh={() => roomState.refetch()}/>}
        </RoomContainer>
    );
};

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
  margin-bottom: 3rem;
`;
