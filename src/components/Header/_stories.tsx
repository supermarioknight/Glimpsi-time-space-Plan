import * as React from 'react';
import { reduxStoriesOf } from '../../lib/storybook';
import TimelineHeader from './Timeline';
import BasicHeader from './Basic';

reduxStoriesOf('Header', module)
  .add('timeline', () => <TimelineHeader />)
  .add('basic', () => <BasicHeader />);
