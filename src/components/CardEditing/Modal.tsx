import * as React from 'react';
import { withAnalyticsEvents } from '@atlaskit/analytics-next';
import { flow } from 'lodash-es';
import NewCard, { Props } from './';
import { withModal } from '../../decorators/analytics/view';
import Modal from '../Modal';

const NewCardModal: React.StatelessComponent<Props> = props => (
  <Modal onRequestClose={props.onCancel} appRoot={document.getElementById('root') as HTMLElement}>
    <NewCard {...props} />
  </Modal>
);

export default flow([
  withModal<Props>('EditingCardModal'),
  withAnalyticsEvents<Props>({
    onSave: (createAnalyticsEvent, props) =>
      createAnalyticsEvent({ action: props.id ? 'save editing card' : 'save new card' }).fire(),
    onCancel: (createAnalyticsEvent, props) =>
      createAnalyticsEvent({
        action: props.id ? 'cancel editing card' : 'cancel creating card',
      }).fire(),
  }),
])(NewCardModal);
