import * as React from 'react';
import { Root, FixedHeader } from '../styles';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const DefaultLayout: React.StatelessComponent<Props> = ({ children, className }) => (
  <Root className={className}>
    <FixedHeader appearance="transparent" />
    {children}
  </Root>
);

export default DefaultLayout;
