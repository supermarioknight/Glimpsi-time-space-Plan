import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Notification from './';

storiesOf('Notification', module)
  .add('default', () => <Notification appearance="default">hello, world!</Notification>)
  .add('warning', () => <Notification appearance="warning">Uh oh.</Notification>)
  .add('info', () => <Notification appearance="info">All good!</Notification>);
