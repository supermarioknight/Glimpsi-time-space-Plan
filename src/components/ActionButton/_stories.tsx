import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ActionButton from './';

storiesOf('ActionButton', module).add('start date', () => (
  <ActionButton onLabelFilter={action('onLabelFilter')} labels={[]} newCard={action('newCard()')} />
));
