import * as React from 'react';
import { reduxStoriesOf } from '../../lib/storybook';
import MapTimeline from './';

reduxStoriesOf('Connected()/MapTimeline', module).add('default', () => (
  <MapTimeline />
));
