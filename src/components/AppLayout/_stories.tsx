import * as React from 'react';
import { reduxStoriesOf } from '../../lib/storybook';
import App from './';

reduxStoriesOf('App', module).add('default', () => <App>page goes here</App>);
