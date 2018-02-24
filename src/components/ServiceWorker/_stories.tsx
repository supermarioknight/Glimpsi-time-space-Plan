import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Notification from '../Notification';
import NewVersionAvailable from './NewVersionAvailable';

storiesOf('ServiceWorker/NewVersonAvailable', module).add('default', () => (
  <Notification hideCloseButton appearance="default" requestClose={action('requestClose')}>
    <NewVersionAvailable />
  </Notification>
));
