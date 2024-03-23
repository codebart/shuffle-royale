import styled from 'styled-components';

export const Select = styled.select`
  border: 2px solid ${({theme}) => theme.color.background.light};
  border-radius: 5px;
  padding: 0.4rem 1rem;
  background-color: ${({theme}) => theme.color.background.normal};
  margin: 0;
  color: ${({theme}) => theme.color.secondary.normal};
`;