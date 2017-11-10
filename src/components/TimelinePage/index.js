// @flow

import React from 'react';
import Timeline, { type Props as TimelineProps } from '../../components/Timeline';
import ActionButton from '../ActionButton';
import CardEditing from '../CardEditing';

type Props = TimelineProps & {
  adding: boolean,
  newCard: Function,
  saveCard: Function,
  removeCard: Function,
  cancelNewCard: Function,
  updateTimeline: Function,
};

const TimelinePage = ({ newCard, cancelNewCard, adding, removeCard, ...props }: Props) => [
  <Timeline {...props} key="timeline" deleteCard={removeCard} />,
  adding ? null : <ActionButton key="action-button" newCard={newCard} />,
  adding ? <CardEditing onSave={props.saveCard} onCancel={cancelNewCard} key="new-card" /> : null,
];

export default TimelinePage;
