import * as React from 'react';
import { withAnalyticsEvents } from '@atlaskit/analytics-next';
import { flow } from 'lodash-es';
import NewCard, { Props } from './';
import { withModal } from '../../decorators/analytics/view';
import Modal from '../Modal';

export interface Propz extends Props {
  in: boolean;
}

const NewCardModal: React.StatelessComponent<Propz> = ({ in: inn, ...props }) => (
  <Modal
    in={inn}
    onRequestClose={props.onCancel}
    appRoot={document.getElementById('root') as HTMLElement}
  >
    <NewCard {...props} />
  </Modal>
);

export default flow([
  withModal<Propz>('EditingCardModal'),
  withAnalyticsEvents<Propz>({
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
