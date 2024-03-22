import {Select} from '../../ui/Select';
import {Button} from '../../ui/Button';
import styled from 'styled-components';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {useForm} from 'react-hook-form';

const paginationOptions: number[] = [
    10,
    25,
    50,
    100,
    500
];

type PaginationForm = {
    rowsPerPage: number,
    currentPage: number
}

const initialForm: PaginationForm = {
    rowsPerPage: 10,
    currentPage: 1
};

export const RoomPagination = ({totalElements}: {totalElements: number}) => {
    const {t} = useTranslation();
    const {register, handleSubmit, watch} = useForm<PaginationForm>({
        defaultValues: initialForm
    });
    const from = (watch('currentPage') - 1) * watch('rowsPerPage') + 1;
    const to = Math.min(totalElements, Math.max(from, watch('currentPage') * watch('rowsPerPage')));
    return (
        <li>
            <RoomPaginationContainer>
                <span>{t('rooms.list.pagination.rowsPerPage')}:</span>
                <Select {...register('rowsPerPage')}>
                    {paginationOptions.map((value) => <option key={value} value={value}>{value}</option>)}
                </Select>
                <span>{from}-{to} {t('rooms.list.pagination.of')} {totalElements} {t('rooms.list.pagination.rooms')}</span>
                <Button>&lt;</Button>
                <Button>&gt;</Button>
            </RoomPaginationContainer>
        </li>
    );
};

const RoomPaginationContainer = styled.form`
  display: flex;
  border: 2px solid lightgray;
  border-bottom: none;
  padding: 0.5rem;
  align-items: center;
  column-gap: 0.5rem;
  justify-content: center;

  span:first-child {
    font-size: 0.8rem;
  }

  button {
    width: 3rem;
    flex-grow: 0;
    font-weight: bold;
    color: #666666;
  }
`;
