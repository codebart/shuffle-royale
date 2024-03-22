import React from 'react';
import styled from 'styled-components';
import {RoomsSort} from './RoomSort';
import {RoomsFilters} from './RoomFilters';
import {RoomList} from './RoomList';
import {useRoomList} from '../../../api/endpoint/roomList.get';
import {useForm} from 'react-hook-form';
import {initialRoomListForm, RoomListForm} from '../../../model/rooms.model';

export const Rooms = () => {
    const {watch, setValue} = useForm<RoomListForm>({
        defaultValues: initialRoomListForm
    })
    const rooms = useRoomList(watch());
    return (
        <RoomsContainer>
            <RoomsFilters onChange={form => setValue('filter', form)}/>
            <RoomsSort onChange={form => setValue('sort', form)}/>
            <RoomList rooms={rooms.data?.rooms || []}/>
        </RoomsContainer>
    );
};

const RoomsContainer = styled.div`
  padding: 2rem;
`;
