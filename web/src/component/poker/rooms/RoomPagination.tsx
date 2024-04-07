import {Select} from 'component/ui/Select';
import {Button} from 'component/ui/Button';
import styled from 'styled-components';
import React, {useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {useForm} from 'react-hook-form';
import {initialPaginationForm, PaginationForm, SortDirection, SortForm} from "../../../model/rooms.model";

const paginationOptions: number[] = [
    10,
    25,
    50,
    100,
    500
];

export type RoomPaginationProps = {
    totalElements: number;
    totalPages: number;
    onChange: (form: PaginationForm) => void;
}

export const RoomPagination = ({totalElements, totalPages, onChange}: RoomPaginationProps) => {
    const {t} = useTranslation();
    const {register, setValue, watch} = useForm<PaginationForm>({
        defaultValues: initialPaginationForm
    });
    const currentPage = watch('currentPage');
    const rowsPerPage = watch('rowsPerPage');
    const from = currentPage * rowsPerPage + 1;
    const to = Math.min(totalElements, Math.max(from, (currentPage + 1) * rowsPerPage + 1));
    const onPageChanged = useCallback((page: number) => () => {
        setValue('currentPage', page);
    }, [setValue]);
    React.useEffect(() => {
        const subscription = watch((value) => onChange(value as PaginationForm))
        return () => subscription.unsubscribe()
    }, [watch])
    return (
        <li>
            <RoomPaginationContainer>
                <span>{t('rooms.list.pagination.rowsPerPage')}:</span>
                <Select {...register('rowsPerPage')}>
                    {paginationOptions.map((value) => <option key={value} value={value}>{value}</option>)}
                </Select>
                <span>{from}-{to} {t('rooms.list.pagination.of')} {totalElements} {t('rooms.list.pagination.rooms')}</span>
                <Button disabled={currentPage === 0} onClick={onPageChanged(currentPage - 1)}>&lt;</Button>
                <Button disabled={currentPage >= totalPages - 1} onClick={onPageChanged(currentPage + 1)}>&gt;</Button>
            </RoomPaginationContainer>
        </li>
    );
};

const RoomPaginationContainer = styled.form`
  display: flex;
  border: 2px solid ${({theme}) => theme.color.background.light};
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
    color: ${({theme}) => theme.color.secondary.darkest};
  }
`;
