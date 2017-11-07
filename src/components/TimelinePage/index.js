// @flow

import React from 'react';
import Timeline, { type Props as TimelineProps } from '../../components/Timeline';
import ActionButton from '../ActionButton';
import CardEditing from '../CardEditing';

type Props = TimelineProps & {
  adding: boolean,
  newCard: Function,
  saveCard: Function,
  cancelAdd: Function,
};

const TimelinePage = ({ onNewCard, onCancelAdd, adding, ...props }: Props) => [
  <Timeline {...props} key="timeline" />,
  adding ? null : <ActionButton key="action-button" onNewCard={onNewCard} />,
  adding ? <CardEditing onSave={props.onSaveCard} onCancel={onCancelAdd} key="new-card" /> : null,
];

export default TimelinePage;
