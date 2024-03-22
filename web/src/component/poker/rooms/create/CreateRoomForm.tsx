import {Button} from '../../../ui/Button';
import styled from 'styled-components';
import React, {useCallback} from 'react';
import {Select} from '../../../ui/Select';
import {blinds} from '../../../../model/Room';
import {Input} from '../../../ui/Input';
import {useForm} from 'react-hook-form';

const initialForm: CreateRoomForm = {
    blinds: '1/2',
    buyIn: 20,
    noLimit: true,
    seats: 10
};

type CreateRoomForm = {
    blinds: string;
    seats: number;
    buyIn: number;
    noLimit: boolean;
}

export const CreateRoomForm = ({onCreated}: {onCreated: () => void}) => {
    const {register, handleSubmit} = useForm<CreateRoomForm>({
        defaultValues: initialForm
    });
    const onSubmit = useCallback(() => {

        onCreated();
    }, []);
    return (
        <RoomCreatorContainer onSubmit={onSubmit}>
            <ul>
                <li>
                    <label>Blinds:</label>
                    <Select {...register('blinds')}>
                        {blinds.map(([small, big]: [number, number]) => <option
                            key={`${small}/${big}`}>{small}/{big}</option>)}
                    </Select>
                </li>
                <li>
                    <label>Seats: </label>
                    <Select {...register('seats')}>
                        {new Array(9).fill(1).map((value, index) => <option key={10 - index}>{10 - index}</option>)}
                    </Select>
                </li>
                <li>
                    <label>Buy in (big blinds):</label>
                    <BuyInInput {...register('buyIn')} type={'number'} defaultValue={20}/>
                </li>
                <li>
                    <Input {...register('noLimit')} type={'checkbox'} checked/> No Limit
                </li>
            </ul>
            <Button type={'submit'}>Start</Button>
        </RoomCreatorContainer>
    );
};

const BuyInInput = styled(Input)`
  width: 7rem;
`;

const RoomCreatorContainer = styled.form`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

    > li {
      display: inline-block;
      margin-right: 0.5rem;
      padding-right: 0.5rem;
    }

    > li:last-child {
      border-right: none;
    }

  }

  label {
    display: block;
    margin-bottom: 0.2rem;
  }

  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
`;