import {Avatar} from '../shared/Avatar';
import styled from 'styled-components';
import {Coins} from '../shared/Coins';

export const User = () => (
    <UserContainer>
        <Avatar/>
        <div>
            <Name>Anonymous</Name>
            <Coins coins={4000} locked={2000}/>
        </div>
    </UserContainer>
);

const UserContainer = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 11rem;
  height: 3rem;
  display: flex;
  border: 3px solid lightgray;
  padding: 0.5rem;
  border-radius: 5px;
  column-gap: 0.5rem;
  justify-content: space-evenly;
  
  &:hover {
    background-color: #DDDDDD;
    cursor: pointer;
  }
`;

const Name = styled.div`
  font-weight: bold;    
  font-size: 1.1rem;
`