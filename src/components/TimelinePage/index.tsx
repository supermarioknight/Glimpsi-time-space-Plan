// @flow

import * as React from 'react';
import Timeline, { Props as TimelineProps } from '../../components/Timeline';
import ActionButton from '../ActionButton';
import CardEditing from '../CardEditing';

interface Props extends TimelineProps {
  adding: boolean,
  newCard: Function,
  cancelNewCard: Function,
};

const TimelinePage = ({ newCard, cancelNewCard, adding, ...props }: Props) => [
  <Timeline {...props} key="timeline" />,
  adding ? null : <ActionButton key="action-button" newCard={newCard} />,
  adding ? <CardEditing onSave={props.saveCard} onCancel={cancelNewCard} key="new-card" /> : null,
];

export default TimelinePage;
