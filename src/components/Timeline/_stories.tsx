import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import moment from 'moment';
import cards from '../../features/MapTimeline/exampleCards';
import Timeline from './';

const groups = [
  {
    cards,
    date: moment(),
  },
];

storiesOf('Timeline', module).add('default', () => (
  <Timeline
    saveCard={action('saveCard()')}
    removeCard={action('deleteCard()')}
    days={groups}
    filters={[]}
  />
));
