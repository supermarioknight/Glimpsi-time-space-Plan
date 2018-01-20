import * as React from 'react';
import TimelineActions from '../TimelineActions';
import { Root, PageHeading } from './styles';

interface Props {
  className?: string;
  // tslint:disable-next-line no-any
  newCard: () => any;
  labels: string[];
  // tslint:disable-next-line no-any
  filterLabels: (labels: string[]) => any;
}

const Header: React.StatelessComponent<Props> = ({ className, ...props }) => (
  <Root className={className}>
    <PageHeading>glimpsi</PageHeading>

    <TimelineActions
      newCard={props.newCard}
      onLabelFilter={props.filterLabels}
      labels={props.labels}
    />
  </Root>
);

export default Header;
