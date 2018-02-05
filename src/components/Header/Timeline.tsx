import * as React from 'react';
import TimelineActions from '../TimelineActions/Connected';
import { Root, PageHeading, HeadingLink } from './styles';

interface Props {
  className?: string;
}

const TimelineHeader: React.StatelessComponent<Props> = ({ className }) => (
  <Root className={className} appearance="default">
    <HeadingLink to="/">
      <PageHeading>glimpsi</PageHeading>
    </HeadingLink>

    <TimelineActions />
  </Root>
);

export default TimelineHeader;
