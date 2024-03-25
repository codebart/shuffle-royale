import styled from 'styled-components';

export const Loader = () => (
    <LoaderContainer>
        <LoaderIcon>⌛</LoaderIcon>
    </LoaderContainer>
);

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1em;
  font-weight: bold;
`;

const LoaderIcon = styled.span`
  filter: grayscale(1);
  font-size: 3em;
  animation: spin 2s ease-in-out infinite;

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