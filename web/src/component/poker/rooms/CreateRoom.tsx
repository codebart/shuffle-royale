import {Button} from '../../ui/Button';
import styled from 'styled-components';
import React from 'react';

export const CreateRoom = () => (
    <CreateRoomContainer>
        <Button>Create</Button>
    </CreateRoomContainer>
);

const CreateRoomContainer = styled.li`
  border: 2px solid lightgray;
  border-bottom: none;
  display: flex;
  padding: 0.5rem;
`;