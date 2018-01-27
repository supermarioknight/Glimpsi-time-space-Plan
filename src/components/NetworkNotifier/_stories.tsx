import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Toggler from '../Toggler';
import NetworkNotifier from './';

storiesOf('NetworkNotifier', module).add('default', () => (
  <Toggler>
    {({ shown, toggle }) => (
      <div>
        <button onClick={toggle}>go {shown ? 'online' : 'offline'}</button>
        <NetworkNotifier online={!shown} offlineAt={shown ? new Date() : undefined} />
      </div>
    )}
  </Toggler>
));
