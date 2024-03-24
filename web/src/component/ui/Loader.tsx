import styled from 'styled-components';

export const Loader = () => (
    <LoaderContainer>
        <LoaderIcon>⌛</LoaderIcon>
        Loading...
    </LoaderContainer>
);

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
`;

const LoaderIcon = styled.span`
  filter: grayscale(1);
  font-size: 3rem;
  animation: spin 2s linear infinite;

  @keyframes spin {
    25% {
      transform: rotate(15deg);
    }
    50% {
      transform: rotate(0deg);
    }
    75% {
      transform: rotate(-15deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;