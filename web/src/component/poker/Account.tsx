import {Avatar} from 'component/shared/Avatar';
import styled from 'styled-components';
import {Coins} from 'component/shared/Coins';
import {useAccountInfo} from 'api/endpoint/accountInfo.get';
import {useTranslation} from "react-i18next";
import {Button} from "../ui/Button";

export const Account = () => {
    const {t} = useTranslation();
    const account = useAccountInfo();
    if (!account.isSuccess || !account.data) {
        return null;
    }
    return (
        <UserContainer>
            <TopContainer>
                <LayoutContainer>
                    <Avatar/>
                </LayoutContainer>
                <LayoutContainer>
                    <Name>{account.data.name ?? t('account.anonymousUsername')}</Name>
                    <Coins coins={account.data.freeCoins} locked={account.data.lockedCoins}/>
                </LayoutContainer>
            </TopContainer>
            {!account.data.name && <Button>Register</Button>}
        </UserContainer>
    );
};

const TopContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.2rem;
`

const UserContainer = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 11rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border: 3px solid ${({theme}) => theme.color.background.normal};
  padding: 0.5rem;
  border-radius: 5px;
  justify-content: space-evenly;
  background-color: ${({theme}) => theme.color.background.dark};

  button {
    font-size: 0.7rem;
    padding: 0.2rem;
  }
`;

const Name = styled.div`
  font-weight: bold;    
  font-size: 1.1rem;
`