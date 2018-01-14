import * as React from 'react';
import { storiesOf } from '@storybook/react';
import moment from 'moment';
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
    time={moment('1970-01-01 00:30:00Z')}
    start={moment()}
    duration={30}
    onCancel={action('onCancel()')}
    onSave={action('onSave()')}
    labels={[]}
  />
));
