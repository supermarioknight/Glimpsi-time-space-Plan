// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import Store from '../../Store';
import TimelineFeature from './';

storiesOf('TimelineFeature', module)
  .add('default', () => (
    <Store>
      <TimelineFeature />
    </Store>
  ));
