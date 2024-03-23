import {useThemeContext} from './ThemeContext';
import styled from 'styled-components';
import {ReactElement} from 'react';
import {Button} from '../ui/Button';

export const ChangeTheme = () => (
    <Container>
        <ChangeThemeIcon/>
    </Container>
);

// @ts-ignore
const ChangeThemeIcon = (): ReactElement => {
    const {current, changeTheme} = useThemeContext();
    switch (current.type) {
        case 'dark':
            return <Button onClick={() => changeTheme('light')}>🌙</Button>;
        case 'light':
            return <Button onClick={() => changeTheme('dark')}>🌞</Button>;
    }
};

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  padding: 0.5rem;
  margin: 0.5rem;
  z-index: ${({theme}) => theme.zIndex.modal};
  cursor: pointer;

  button {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    filter: grayscale(1);

    &:hover {
      opacity: 1;
    }
  }
`;