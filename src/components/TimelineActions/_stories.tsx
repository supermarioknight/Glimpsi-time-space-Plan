import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TimelineActions from './';

storiesOf('TimelineActions', module).add('start date', () => (
  <TimelineActions
    onLabelFilter={action('onLabelFilter')}
    labels={[]}
    newCard={action('newCard()')}
    focusToday={action('focusToday()')}
    showFocusToday
  />
));
