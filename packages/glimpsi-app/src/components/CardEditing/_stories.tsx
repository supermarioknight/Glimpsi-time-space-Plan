import * as React from 'react';
import { storiesOf } from '@storybook/react';
import moment from 'moment-timezone';
import { action } from '@storybook/addon-actions';
import CardEditingModal from './Modal';
import CardEditing from './';

storiesOf('Card/Editing', module)
  .add('with values', () => (
    <CardEditing
      title="Visiting the big one"
      location={{
        formattedAddress: 'Los Angeles, CA, USA',
        position: {
          lat: 34.0522342,
          lng: -118.2436849,
        },
      }}
      start={moment().tz('America/Los_Angeles')}
      duration={30}
      onCancel={action('onCancel()')}
      onSave={action('onSave()')}
      labels={['fun']}
    />
  ))
  .add('no values', () => (
    <CardEditing onCancel={action('onCancel()')} onSave={action('onSave()')} />
  ))
  .add('modal', () => (
    <CardEditingModal
      title="Visiting the big one"
      location={{
        formattedAddress: 'Los Angeles, CA, USA',
        position: {
          lat: 34.0522342,
          lng: -118.2436849,
        },
      }}
      start={moment().tz('America/Los_Angeles')}
      duration={30}
      onCancel={action('onCancel()')}
      onSave={action('onSave()')}
      labels={['fun']}
    />
  ));
