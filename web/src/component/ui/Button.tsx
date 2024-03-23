import styled from 'styled-components';

export const Button = styled.button`
  border: 2px solid ${({theme}) => theme.color.background.light};
  border-radius: 5px;
  padding: 0.4rem 1rem;
  font-size: 1em;
  flex-grow: 1;
  cursor: pointer;
  background-color: ${({theme}) => theme.color.background.normal};
  letter-spacing: 1px;
  color: ${({theme}) => theme.color.secondary.normal};

  &:hover {
    background-color: ${({theme}) => theme.color.background.light};
    border-color: ${({theme}) => theme.color.background.lightest};
    color: ${({theme}) => theme.color.secondary.dark};
  }
`;
