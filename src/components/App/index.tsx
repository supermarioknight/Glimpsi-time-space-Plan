import React from 'react';
import styled from 'styled-components';
import Header from '../Header';

interface Props {
  children: React.ReactNode;
}

const Root = styled.div`
  background-color: #f5f5f5;
  min-height: 100%;
`;

const App: React.StatelessComponent<Props> = ({ children }) => (
  <Root>
    <Header />
    {children}
  </Root>
);

export default App;
