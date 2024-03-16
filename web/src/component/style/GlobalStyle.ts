import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({theme}) => theme.color.background.normal};
    font-family: ${({theme}) => theme.font.family};
    font-size: ${({theme}) => theme.font.size.small};
    color: ${({theme}) => theme.color.secondary.normal};
    user-select: none;
    letter-spacing: 1px;
  }
  
  input {
    outline: none;
    border: none;
  }

  a {
    text-decoration: none;
    color: inherit;

    :visited {
      color: inherit;
    }

    :hover {
      color: inherit;
    }
  }
  
  hr {
    background-color: ${({theme}) => theme.color.primary.dark};
    height: 1px;
    margin: 0;
    border: 0 none;
  }
  
  ul {
    padding-left: 1.5rem;
  }
  
  h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    font-weight: normal;
    margin-top: 0;
  }
`;

export default GlobalStyle;