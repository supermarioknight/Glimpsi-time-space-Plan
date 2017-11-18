import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Store from '../../Store';
import MapTimeline from './';

storiesOf('Connected()/MapTimeline', module).add('default', () => (
  <Store>
    <MapTimeline />
  </Store>
));
