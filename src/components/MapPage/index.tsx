import * as React from 'react';
import Timeline, { Props as TimelineProps } from '../../components/Timeline';
import ActionButton from '../ActionButton';
import CardEditing from '../CardEditing';

interface Props extends TimelineProps {
  adding: boolean;
  // tslint:disable-next-line no-any
  newCard: () => any;
  // tslint:disable-next-line no-any
  cancelNewCard: () => any;
  // tslint:disable-next-line no-any
  updateTimeline: (data: { [key: string]: string }) => any;
  start: string;
  end: string;
}

// Can't return arrays from stateless components yet.
// See: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20356#issuecomment-336384210
const MapPage: React.StatelessComponent<Props> = ({
  newCard,
  cancelNewCard,
  adding,
  ...props,
  // tslint:disable-next-line no-any
}): any => [
  <Timeline {...props} key="timeline" />,
  adding ? null : <ActionButton key="action-button" newCard={newCard} />,
  adding ? <CardEditing onSave={props.saveCard} onCancel={cancelNewCard} key="new-card" /> : null,
];

export default MapPage;
