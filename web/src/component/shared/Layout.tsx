import styled from 'styled-components';

export const Layout = ({children}: { children: any | any[] }) => (
    <LayoutContainer>
        <Content>
            {children}
        </Content>
    </LayoutContainer>
);

const LayoutContainer = styled.div`
  height: calc(100% - 2rem);
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`;

const Content = styled.div`
  max-width: 65rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`