import styled from 'styled-components';

export const Input = styled.input`
  border: 2px solid #CCCCCC;
  border-radius: 5px;
  background-color: #EEEEEE;
  padding: 0.4rem;

  &[type="checkbox"] {
    accent-color: #CCCCCC;
    width: 18px;
    height: 18px;
    cursor: pointer;
  }
  
  &[type="button"] {
    cursor: pointer;
    &:hover {
      background-color: #CCCCCC;
      border-color: #BBBBBB;
    }
  }
`;