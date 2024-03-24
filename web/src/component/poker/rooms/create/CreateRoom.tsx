import {Button} from 'component/ui/Button';
import styled from 'styled-components';
import React, {useCallback, useState} from 'react';
import {CreateRoomForm} from './CreateRoomForm';
import {useTranslation} from 'react-i18next';

export const CreateRoom = () => {
    const {t} = useTranslation();
    const [creating, setCreating] = useState(false);
    const changeCreating = useCallback((value: boolean) => () => setCreating(value), [setCreating]);
    return (
        <CreateRoomContainer>
            {!creating && <Button onClick={changeCreating(true)}>{t('room.create.create')}</Button>}
            {creating && <CreateRoomForm onCreated={changeCreating(false)}/>}
            {creating && <CloseForm onClick={changeCreating(false)}>⨯</CloseForm>}
        </CreateRoomContainer>
    );
};

const CreateRoomContainer = styled.li`
  border: 2px solid ${({theme}) => theme.color.background.light};
  border-bottom: none;
  display: flex;
  padding: 0.5rem;
  position: relative;

  button {
    height: 2.5rem;
  }
`;

const CloseForm = styled(Button)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0.2rem;
  height: 1.5rem !important;
  width: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
`;