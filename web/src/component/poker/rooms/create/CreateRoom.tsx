import {Button} from '../../../ui/Button';
import styled from 'styled-components';
import React, {useCallback, useState} from 'react';
import {CreateRoomForm} from './CreateRoomForm';

export const CreateRoom = () => {
    const [creating, setCreating] = useState(false);
    const changeCreating =  useCallback((value: boolean) => () => setCreating(value), [setCreating]);
    return (
        <CreateRoomContainer>
            {!creating && <Button onClick={changeCreating(true)}>Create</Button>}
            {creating && <CreateRoomForm onCreated={changeCreating(false)}/>}
        </CreateRoomContainer>
    );
};

const CreateRoomContainer = styled.li`
  border: 2px solid lightgray;
  border-bottom: none;
  display: flex;
  padding: 0.5rem;
`;
