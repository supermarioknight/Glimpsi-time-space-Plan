import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Notification from './';

storiesOf('Notification', module)
  .add('default', () => (
    <Notification requestClose={action('requestClose')} appearance="default">
      hello, world!
    </Notification>
  ))
  .add('warning', () => (
    <Notification requestClose={action('requestClose')} appearance="warning">
      Uh oh.
    </Notification>
  ))
  .add('info', () => (
    <Notification requestClose={action('requestClose')} appearance="info">
      All good!
    </Notification>
  ));
