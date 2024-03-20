import {Button} from '../../ui/Button';
import styled from 'styled-components';
import React, {useState} from 'react';
import {Select} from '../../ui/Select';
import {blinds} from '../../../model/Room';
import {Input} from '../../ui/Input';

export const CreateRoom = () => {
    const [creating, setCreating] = useState(false);
    return (
        <CreateRoomContainer>
            {!creating && <Button onClick={() => setCreating(true)}>Create</Button>}
            {creating && <RoomCreator/>}
        </CreateRoomContainer>
    );
};

const CreateRoomContainer = styled.li`
  border: 2px solid lightgray;
  border-bottom: none;
  display: flex;
  padding: 0.5rem;
`;

const RoomCreator = () => (
    <RoomCreatorContainer>
        <ul>
            <li>
                <label>Blinds:</label>
                <Select>
                    {blinds.map(([small, big]: [number, number]) => <option>{small}/{big}</option>)}
                </Select>
            </li>
            <li>
                <label>Seats: </label>
                <Select>
                    {new Array(9).fill(1).map((value, index) => <option>{10 - index}</option>)}
                </Select>
            </li>
            <li>
                <label>Buy in (big blinds):</label>
                <BuyInInput type={'number'} defaultValue={20}/>
            </li>
            <li>
                <Input type={'checkbox'} checked/> No Limit
            </li>
        </ul>
        <Button>Start</Button>
    </RoomCreatorContainer>
)

const BuyInInput = styled(Input)`
  width: 7rem;
`

const RoomCreatorContainer = styled.div`
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
`