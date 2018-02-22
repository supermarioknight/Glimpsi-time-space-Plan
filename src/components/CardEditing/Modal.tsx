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
      createAnalyticsEvent({
        action: props.id ? 'Save Editing Card' : 'Save New Card',
        category: 'Timeline',
      }).fire(),
    onCancel: (createAnalyticsEvent, props) =>
      createAnalyticsEvent({
        action: props.id ? 'Cancel Editing Card' : 'Cancel Creating Card',
        category: 'Timeline',
      }).fire(),
  }),
])(NewCardModal);
