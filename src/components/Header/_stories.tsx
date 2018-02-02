import * as React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import Header from './';

storiesOf('Header', module).add('responsive', () => (
  <Header
    labels={['fun']}
    newCard={action('newCard()')}
    focusToday={action('focusToday()')}
    filterLabels={action('filterLabels()')}
  />
));
