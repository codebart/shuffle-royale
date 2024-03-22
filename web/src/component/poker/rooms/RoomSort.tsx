import {Select} from '../../ui/Select';
import styled from 'styled-components';
import React, {useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {useForm} from 'react-hook-form';
import {Input} from '../../ui/Input';

enum SortKey {
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

type SortForm = {
    key: SortKey,
    direction: SortDirection
}

const initialForm: SortForm = {
    key: SortKey.BLINDS,
    direction: SortDirection.ASC
}

export const RoomsSort = () => {
    const {t} = useTranslation();
    const {register, setValue, getValues} = useForm<SortForm>({
        defaultValues: initialForm
    });
    const onDirectionClicked = useCallback(() => {
        setValue('direction', getValues('direction') === SortDirection.ASC ? SortDirection.DESC : SortDirection.ASC);
    }, []);
    return (
        <RoomsSortContainer>
            <h3>{t('rooms.sort.header')}</h3>
            <label htmlFor={'sort'}>{t('rooms.sort.sortBy')}:</label>
            <Select {...register('key')} id={'sort'}>
                {Object.keys(SortKey).map(key => <option key={key} value={key}>{t(`rooms.sort.key.${key}`)}</option>)}
            </Select>
            <Input onClick={onDirectionClicked} {...register('direction')} type={'button'}/>
        </RoomsSortContainer>
    );
};

const RoomsSortContainer = styled.form`
  label {
    display: block;
    margin-bottom: 0.2rem;
  }
  
  select {
    margin-right: 0.5rem;
  }
`;
