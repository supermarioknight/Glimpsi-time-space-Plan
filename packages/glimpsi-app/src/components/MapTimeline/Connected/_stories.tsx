import * as React from 'react';
import { reduxStoriesOf } from '../../../lib/storybook';
import ConnectedMapTimeline from './';

reduxStoriesOf('MapTimeline/Connected', module).add('default', () => <ConnectedMapTimeline />);
