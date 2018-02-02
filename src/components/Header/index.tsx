import * as React from 'react';
import TimelineActions from '../TimelineActions/Connected';
import { Root, PageHeading } from './styles';

interface Props {
  className?: string;
}

const Header: React.StatelessComponent<Props> = ({ className }) => (
  <Root className={className}>
    <PageHeading>glimpsi</PageHeading>

    <TimelineActions />
  </Root>
);

export default Header;
