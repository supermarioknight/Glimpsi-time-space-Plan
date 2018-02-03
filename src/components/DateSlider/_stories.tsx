import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import moment from 'moment-timezone';
import DateSlider from './';

storiesOf('DateSlider', module).add('default', () => (
  <DateSlider
    start={moment()}
    end={moment().add(10, 'days')}
    onChange={action('onChange()')}
    values={[moment().add(1, 'days'), moment().add(4, 'days')]}
    type="days"
  />
));
