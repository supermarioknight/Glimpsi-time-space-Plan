import * as React from 'react';
import { Root, PageHeading } from './styles';

interface Props {
  className?: string;
}

const Header: React.StatelessComponent<Props> = ({ className }) => (
  <Root className={className}>
    <PageHeading>glimpsi</PageHeading>
  </Root>
);

export default Header;
