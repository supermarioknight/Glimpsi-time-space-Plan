import * as React from 'react';
import { reduxStoriesOf } from '../../lib/storybook';
import MapTimeline from './';

reduxStoriesOf('MapTimeline/Connected', module).add('default', () => <MapTimeline />);
