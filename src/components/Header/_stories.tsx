import * as React from 'react';
import { reduxStoriesOf } from '../../lib/storybook';
import Header from './';

reduxStoriesOf('Header', module).add('responsive', () => <Header />);
