import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import moment from 'moment';
import EditableCard from './';

storiesOf('Card/Editable', module).add('with values', () => (
  <EditableCard
    id="1"
    title="Valentines Day"
    labels={[]}
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
    notes=""
    onSave={action('onSave()')}
    onDelete={action('onDelete()')}
    onEditing={action('onEditing()')}
  />
));
