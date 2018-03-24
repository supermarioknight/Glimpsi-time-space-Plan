import * as React from 'react';
import { storiesOf } from '@storybook/react';
import NotificationNotifier from '../NotificationNotifier';
import NotificationProvider from './';

storiesOf('NotificationProvider', module)
  .addDecorator(story => <NotificationProvider>{story()}</NotificationProvider>)
  .add('add', () => (
    <NotificationNotifier>
      {({ notify }) => (
        <div>
          <button onClick={() => notify('hello world', { type: 'default' })}>add</button>
          <button onClick={() => notify('goodbye world', { type: 'warning', autoCloseMs: 1000 })}>
            add autoclosing
          </button>
        </div>
      )}
    </NotificationNotifier>
  ));
