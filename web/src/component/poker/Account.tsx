import {Avatar} from '../shared/Avatar';
import styled from 'styled-components';
import {Coins} from '../shared/Coins';
import {useAccountInfo} from '../../api/endpoint/accountInfo.get';

export const Account = () => {
    const account = useAccountInfo();
    if (!account.isSuccess || !account.data) {
        return null;
    }
    return (
        <UserContainer>
            <Avatar/>
            <div>
                <Name>{account.data.name}</Name>
                <Coins coins={account.data.freeCoins} locked={account.data.lockedCoins}/>
            </div>
        </UserContainer>
    );
};

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