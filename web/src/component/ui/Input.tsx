import styled from 'styled-components';

export const Input = styled.input`
  border: 2px solid ${({theme}) => theme.color.background.light};
  border-radius: 5px;
  background-color: ${({theme}) => theme.color.background.normal};
  padding: 0.4rem;
  color: ${({theme}) => theme.color.secondary.normal};

  &[type="checkbox"] {
    accent-color: ${({theme}) => theme.color.background.normal};
    width: 18px;
    height: 18px;
    cursor: pointer;
  }
  
  &[type="button"] {
    cursor: pointer;
    &:hover {
      background-color: ${({theme}) => theme.color.background.light};
      border-color: ${({theme}) => theme.color.background.lightest};
    }
  }
`;