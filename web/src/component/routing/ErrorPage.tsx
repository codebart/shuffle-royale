import {useRouteError} from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

type Error = {
    statusText?: string;
    message: string;
}

export const ErrorPage = () => {
    const error: Error = useRouteError() as Error;
    return (
        <Container>
            <Header>Something went wrong</Header>
            <Description>
                {error?.statusText || error?.message}
            </Description>
            <button>Take me back to the homepage</button>
        </Container>
    );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;

  button {
    flex-grow: 0;
  }
`

const Header = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
`;

const Description = styled.div`
  text-align: justify;
  margin-bottom: 2rem;
  margin-top: 1rem;
`;
