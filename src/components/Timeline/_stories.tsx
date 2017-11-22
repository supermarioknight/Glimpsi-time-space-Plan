import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import cards from '../../features/MapTimeline/exampleCards';
import Timeline from './';

storiesOf('Timeline', module).add('default', () => (
  <Timeline saveCard={action('saveCard()')} removeCard={action('deleteCard()')} items={cards} />
));
