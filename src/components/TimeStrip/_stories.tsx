import * as React from 'react';
import { storiesOf } from '@storybook/react';
import TimeStrip from './';

const props = {
  current: {
    date: '2017-11-04T10:00:00',
    duration: 30,
  },
  next: {
    date: '2017-11-04T10:10:00',
    duration: 30,
  },
  children: 'hi',
};

storiesOf('TimeStrip', module).add('default', () => <TimeStrip {...props} />);
