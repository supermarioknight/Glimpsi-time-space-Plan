import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import CardEditing from './';

storiesOf('Card/Editing', module).add('with values', () => (
  <CardEditing
    title="Valentines Day"
    location={{
      formattedAddress: 'Sapporo, Hokkaido, Japan',
      position: {
        lat: 1,
        lng: 1,
      },
    }}
    start="2017-11-04T01:38:55.430Z"
    duration={30}
    onCancel={action('onCancel()')}
    onSave={action('onSave()')}
  />
));
