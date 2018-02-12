import * as React from 'react';
import { reduxStoriesOf } from '../../lib/storybook';
import Header from './';

reduxStoriesOf('Header', module)
  .add('default', () => <Header appearance="default" />)
  .add('transparent', () => <Header appearance="transparent" />);
