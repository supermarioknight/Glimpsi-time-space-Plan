import * as React from 'react';
import Header from '../../Header';
import { Root } from '../styles';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const DefaultLayout: React.StatelessComponent<Props> = ({ children, className }) => (
  <Root className={className}>
    <Header appearance="transparent" />
    {children}
  </Root>
);

export default DefaultLayout;
