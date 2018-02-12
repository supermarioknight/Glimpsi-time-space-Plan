import * as React from 'react';
import Header from '../../Header';
import TimelineActions from '../../TimelineActions/Async';
import { Root } from '../styles';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const MapTimelineLayout: React.StatelessComponent<Props> = ({ children, className }) => (
  <Root className={className}>
    <Header appearance="default">
      <TimelineActions />
    </Header>

    {children}
  </Root>
);

export default MapTimelineLayout;
