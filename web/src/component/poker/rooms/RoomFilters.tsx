import {Select} from 'component/ui/Select';
import {Input} from 'component/ui/Input';
import styled from 'styled-components';
import React from 'react';
import {blinds} from 'model/room.model';
import {useTranslation} from 'react-i18next';
import {
    ANY,
    initialRoomsFiltersForm,
    RoomsFiltersForm,
} from 'model/rooms.model';
import {useForm} from 'react-hook-form';
import {TriStateCheckbox} from "../../ui/TriStateCheckbox";

export const RoomsFilters = ({onChange}: { onChange: (form: RoomsFiltersForm) => void }) => {
    const {t} = useTranslation();
    const {register, setValue, watch} = useForm<RoomsFiltersForm>({
        defaultValues: initialRoomsFiltersForm
    });
    React.useEffect(() => {
        const subscription = watch((value) => onChange(value as RoomsFiltersForm));
        return () => subscription.unsubscribe();
    }, [watch]);
    return (
        <RoomsFiltersContainer>
            <h3>{t('rooms.filters.header')}</h3>
            <ul>
                <li>
                    <label>{t('rooms.filters.blinds')}:</label>
                    <SignSelect {...register('blindsOperator')}>
                        <option>&gt;</option>
                        <option>&lt;</option>
                    </SignSelect>
                    <Select {...register('blinds')}>
                        <option value={'any'}>{t('rooms.filters.any')}</option>
                        {blinds.map(([small, big]: [number, number]) => <option
                            key={`${small}/${big}`}>{small}/{big}</option>)}
                    </Select>
                </li>
                <li>
                    <label>{t('rooms.filters.seats')}: </label>
                    <SignSelect {...register('seatsOperator')}>
                        <option>&gt;</option>
                        <option>&lt;</option>
                    </SignSelect>
                    <Select {...register('seats')}>
                        <option value={'any'}>{t('rooms.filters.any')}</option>
                        {new Array(9).fill(1).map((value, index) => <option key={index + 2}>{index + 2}</option>)}
                    </Select>
                </li>
                <li>
                    <label>{t('rooms.filters.players')}:</label>
                    <SignSelect {...register('playersOperator')}>
                        <option>&gt;</option>
                        <option>&lt;</option>
                    </SignSelect>
                    <Select {...register('players')}>
                        <option value={'any'}>{t('rooms.filters.any')}</option>
                        {new Array(9).fill(1).map((value, index) => <option key={index + 2}>{index + 2}</option>)}
                    </Select>
                </li>
                <li>
                    <label>{t('rooms.filters.totalStacks')}:</label>
                    <SignSelect {...register('totalStacksOperator')}>
                        <option>&gt;</option>
                        <option>&lt;</option>
                    </SignSelect>
                    <ValueInput {...register('totalStacks')} type={'text'} defaultValue={t('rooms.filters.any')}/>
                </li>
                <li>
                    <label>{t('rooms.filters.buyIn')}:</label>
                    <SignSelect {...register('buyInOperator')}>
                        <option>&gt;</option>
                        <option>&lt;</option>
                    </SignSelect>
                    <ValueInput {...register('buyIn')} type={'text'} defaultValue={t('rooms.filters.any')}/>
                </li>
                <li>
                    <TriStateCheckbox onChange={value => setValue('noLimit', value !== null ? value : ANY)}/> {t('rooms.filters.noLimit')}
                </li>
            </ul>
        </RoomsFiltersContainer>
    );
};

const SignSelect = styled(Select)`
  width: 3rem;
  margin-right: 0.2rem;
`;

const ValueInput = styled(Input)`
  width: 5rem;
`;

const RoomsFiltersContainer = styled.div`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

    > li {
      display: inline-block;
      margin-right: 0.5rem;
      padding-right: 0.5rem;
    }

    li:last-child {
      border-right: none;
    }

  }

  label {
    display: block;
    margin-bottom: 0.2rem;
  }
`;
