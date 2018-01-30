import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import moment from 'moment-timezone';
import DayActions from './';

storiesOf('DayActions', module).add('start date', () => (
  <DayActions newCard={action('newCard()')} start={moment()} />
));
