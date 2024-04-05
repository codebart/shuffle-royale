import React from 'react';
import styled from 'styled-components';
import {RoomsSort} from './RoomSort';
import {RoomsFilters} from './RoomFilters';
import {RoomList} from './RoomList';
import {useRoomList} from 'api/endpoint/roomList.get';
import {useForm} from 'react-hook-form';
import {ANY, initialRoomListForm, RoomListForm} from 'model/rooms.model';
import {RoomPagination} from "./RoomPagination";

export const Rooms = () => {
    const {watch, setValue} = useForm<RoomListForm>({
        defaultValues: initialRoomListForm
    })
    const form = watch();
    const rooms = useRoomList({
        filter: {
            blinds: form.filter.blinds === ANY ? null : form.filter.blinds,
            blindsOperator: form.filter.blindsOperator,
            seats: form.filter.seats === ANY ? null : form.filter.seats,
            seatsOperator: form.filter.seatsOperator,
            players: form.filter.players === ANY ? null : form.filter.players,
            playersOperator: form.filter.playersOperator,
            totalStacks: form.filter.totalStacks === ANY ? null : form.filter.totalStacks,
            totalStacksOperator: form.filter.totalStacksOperator,
            buyIn: form.filter.buyIn === ANY ? null : form.filter.buyIn,
            buyInOperator: form.filter.buyInOperator,
            noLimit: form.filter.noLimit === ANY ? null : form.filter.noLimit,
        },
        sort: {
            sortKey: form.sort.key,
            sortDirection: form.sort.direction
        },
        pagination: {
            page: form.pagination.currentPage,
            elements: form.pagination.rowsPerPage
        }
    });
    return (
        <RoomsContainer>
            <RoomsFilters onChange={form => setValue('filter', form)}/>
            <RoomsSort onChange={form => setValue('sort', form)}/>
            <RoomList onRefresh={() => rooms.refetch()} error={rooms.isError && !rooms.isFetching} loading={rooms.isFetching} rooms={rooms.data?.rooms || []}>
                <RoomPagination totalPages={rooms?.data?.page?.totalPages || 0} totalElements={rooms?.data?.page?.totalElements || 0} onChange={form => setValue('pagination', form)}/>
            </RoomList>
        </RoomsContainer>
    );
};

const RoomsContainer = styled.div`
  padding: 2rem;
`;
