import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {routes} from '../../routing/routes';

export const NotFound = () => (
    <Container>
        <Header404>404</Header404>
        <Header>Page not found</Header>
        <Description>Page not found</Description>
        <button>
            <Link to={routes.root}>
                Take me back to the homepage
            </Link>
        </button>
    </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
  max-width: 25rem;
  margin-left: auto;
  margin-right: auto;

  button {
    flex-grow: 0;
  }
`;

const Header404 = styled.div`
  font-size: 4rem;
  font-weight: bolder;
  text-align: center;
`

const Header = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

const Description = styled.div`
  text-align: justify;
  margin-bottom: 2rem;
  margin-top: 1rem;
`;
