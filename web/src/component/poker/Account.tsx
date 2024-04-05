import {Avatar} from 'component/shared/Avatar';
import styled from 'styled-components';
import {Coins} from 'component/shared/Coins';
import {useAccountInfo} from 'api/endpoint/accountInfo.get';
import {useTranslation} from "react-i18next";

export const Account = () => {
    const {t} = useTranslation();
    const account = useAccountInfo();
    if (!account.isSuccess || !account.data) {
        return null;
    }
    return (
        <UserContainer>
            <Avatar/>
            <div>
                <Name>{account.data.name ?? t('account.anonymousUsername')}</Name>
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
  border: 3px solid ${({theme}) => theme.color.background.light};
  padding: 0.5rem;
  border-radius: 5px;
  column-gap: 0.5rem;
  justify-content: space-evenly;
  background-color: ${({theme}) => theme.color.background.normal};

  &:hover {
    border: 3px solid ${({theme}) => theme.color.background.lightest};
    background-color: ${({theme}) => theme.color.background.light};
    cursor: pointer;
  }
`;

const Name = styled.div`
  font-weight: bold;    
  font-size: 1.1rem;
`