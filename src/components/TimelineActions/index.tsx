import * as React from 'react';
import LabelSelect from '../LabelSelect';
import { Root, Button } from './styles';

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
    <LabelSelect name="label-filter" onChange={onLabelFilter} value={labels} />
    <Button onClick={block(newCard)}>Add</Button>
  </Root>
);

export default TimelineActions;
