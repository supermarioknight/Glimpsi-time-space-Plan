import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import moment from 'moment-timezone';
import DatePicker from './';

storiesOf('DatePicker', module).add('default', () => (
  <DatePicker id="date" value={moment()} onChange={action('onDateChange()')} />
));
