import React from 'react';
import { Root } from './styles';

interface Props {
  children: React.ReactNode;
}

const AppLayout: React.StatelessComponent<Props> = ({ children }) => <Root>{children}</Root>;

export default AppLayout;
