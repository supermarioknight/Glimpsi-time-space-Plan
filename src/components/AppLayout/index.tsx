import React from 'react';
import Header from '../Header/Connected';
import { Root } from './styles';

interface Props {
  children: React.ReactNode;
}

const AppLayout: React.StatelessComponent<Props> = ({ children }) => (
  <Root>
    <Header />
    {children}
  </Root>
);

export default AppLayout;
