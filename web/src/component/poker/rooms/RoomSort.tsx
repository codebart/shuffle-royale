import {Select} from 'component/ui/Select';
import styled from 'styled-components';
import React, {useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {useForm} from 'react-hook-form';
import {Input} from 'component/ui/Input';
import {initialSortForm, SortDirection, SortForm, SortKey} from 'model/rooms.model';

export const RoomsSort = ({onChange}: {onChange: (form: SortForm) => void}) => {
    const {t} = useTranslation();
    const {register, setValue, getValues, watch} = useForm<SortForm>({
        defaultValues: initialSortForm
    });
    const onDirectionClicked = useCallback(() => {
        setValue('direction', getValues('direction') === SortDirection.ASC ? SortDirection.DESC : SortDirection.ASC);
    }, []);
    React.useEffect(() => {
        const subscription = watch((value) => onChange(value as SortForm))
        return () => subscription.unsubscribe()
    }, [watch])
    return (
        <RoomsSortContainer>
            <h3>{t('rooms.sort.header')}</h3>
            <label htmlFor={'sort'}>{t('rooms.sort.sortBy')}:</label>
            <Select {...register('key')} id={'sort'}>
                {Object.keys(SortKey).map(key => <option key={key} value={key}>{t(`rooms.sort.key.${key}`)}</option>)}
            </Select>
            <Input onClick={onDirectionClicked} type={'button'} value={t(`rooms.sort.direction.${watch('direction')}`)}/>
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
