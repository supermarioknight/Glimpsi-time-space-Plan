import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TimePicker from './';

storiesOf('TimePicker', module).add('default', () => (
  <TimePicker onChange={action('onChange')} value={undefined} />
));
