import {Button} from 'component/ui/Button';
import styled from 'styled-components';
import React, {useCallback} from 'react';
import {Select} from 'component/ui/Select';
import {blinds} from 'model/room.model';
import {Input} from 'component/ui/Input';
import {useForm} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {useCreateRoom} from 'api/endpoint/createRoom.post';
import {Loader} from '../../../ui/Loader';

type CreateRoomForm = {
    blinds: string;
    seats: number;
    buyIn: number;
    noLimit: boolean;
}

const initialForm: CreateRoomForm = {
    blinds: '1/2',
    buyIn: 20,
    noLimit: true,
    seats: 10
};

export const CreateRoomForm = ({onCreated}: {onCreated: () => void}) => {
    const {t} = useTranslation();
    const {register, handleSubmit, watch} = useForm<CreateRoomForm>({
        defaultValues: initialForm
    });
    const createRoomQuery = useCreateRoom(watch());
    const onSubmit = useCallback(async () => {
        const {data, error} = await createRoomQuery.refetch();
        if (data) {
            onCreated();
        }
    }, [createRoomQuery, onCreated]);
    return (
        <RoomCreatorContainer onSubmit={handleSubmit(onSubmit)}>
            <ul>
                <li>
                    <label>{t('room.create.blinds')}:</label>
                    <Select {...register('blinds')}>
                        {blinds.map(([small, big]: [number, number]) => <option key={`${small}/${big}`}>{small}/{big}</option>)}
                    </Select>
                </li>
                <li>
                    <label>{t('room.create.seats')}: </label>
                    <Select {...register('seats')}>
                        {new Array(9).fill(1).map((value, index) => <option key={10 - index}>{10 - index}</option>)}
                    </Select>
                </li>
                <li>
                    <label>{t('room.create.buyIn')}:</label>
                    <BuyInInput {...register('buyIn')} type={'number'} defaultValue={20}/>
                </li>
                <li>
                    <Input {...register('noLimit')} type={'checkbox'}/> {t('room.create.noLimit')}
                </li>
            </ul>
            <Button type={'submit'}>
                {createRoomQuery.isLoading && <CreateRoomLoadingContainer><Loader/></CreateRoomLoadingContainer>}
                {!createRoomQuery.isLoading && t('room.create.start')}
            </Button>
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
  
  button {
    flex-shrink: 0;
    flex-grow: 0;
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

const CreateRoomLoadingContainer = styled.div`
  font-size: 0.3rem;
`