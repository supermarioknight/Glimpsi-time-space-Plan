import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import NewCard from './';

storiesOf('Card/New', module).add('default', () => (
  <NewCard onCancel={action('onCancel()')} onSave={action('onSave()')} />
));
