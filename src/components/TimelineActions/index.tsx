import * as React from 'react';
import LabelSelect from '../LabelSelect';
import Button from '../Button';
import { Root, Text } from './styles';

const block = (cb: () => void) => (e: React.MouseEvent<HTMLElement>) => {
  e.preventDefault();
  cb();
};

interface Props {
  newCard: () => void;
  onLabelFilter: (labels: string[]) => void;
  labels: string[];
}

const TimelineActions: React.StatelessComponent<Props> = ({ newCard, onLabelFilter, labels }) => (
  <Root>
    <LabelSelect
      placeholder="Filter cards..."
      name="label-filter"
      onChange={onLabelFilter}
      value={labels}
    />

    <Button appearance="transparent" onClick={block(newCard)}>
      <Text>Add</Text>
    </Button>
  </Root>
);

export default TimelineActions;
