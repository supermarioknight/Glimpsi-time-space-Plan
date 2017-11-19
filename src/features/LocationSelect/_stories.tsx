import * as React from 'react';
import { reduxStoriesOf } from '../../lib/storybook';
import LocationSelect from './';

reduxStoriesOf('Connected()/LocationSelect', module).add('default', () => <LocationSelect />);
