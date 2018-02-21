import * as React from 'react';
import { withAnalyticsEvents } from '@atlaskit/analytics-next';
import LabelSelect from '../LabelSelect';
import Button from '../Button';
import { Root, Text } from './styles';

const block = (cb: () => void) => (e: React.MouseEvent<HTMLElement>) => {
  e.preventDefault();
  cb();
};

interface Props {
  labels: string[];
  // tslint:disable-next-line no-any
  newCard: () => any;
  // tslint:disable-next-line no-any
  onLabelFilter: (labels: string[]) => any;
  // tslint:disable-next-line no-any
  focusToday: () => any;
  className?: string;
}

const TimelineActions: React.StatelessComponent<Props> = ({
  newCard,
  onLabelFilter,
  focusToday,
  labels,
  className,
}) => (
  <Root className={className}>
    <LabelSelect
      placeholder="Filter cards"
      name="label-filter"
      onChange={onLabelFilter}
      value={labels}
    />

    <Button appearance="transparent" onClick={focusToday}>
      <Text>Focus today</Text>
    </Button>

    <Button appearance="transparent" onClick={block(newCard)}>
      <Text>Add</Text>
    </Button>
  </Root>
);

export default withAnalyticsEvents<Props>({
  newCard: createAnalyticEvent => createAnalyticEvent({ action: 'open add new card' }).fire(),
  onLabelFilter: createAnalyticEvent =>
    createAnalyticEvent({ action: 'change filter labels' }).fire(),
  focusToday: createAnalyticEvent => createAnalyticEvent({ action: 'focus on today' }).fire(),
})(TimelineActions);
