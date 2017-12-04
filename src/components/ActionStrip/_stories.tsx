import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import moment from 'moment';
import ActionStrip from './';

storiesOf('ActionStrip', module).add('start date', () => (
  <ActionStrip newCard={action('newCard()')} start={moment()} />
));
