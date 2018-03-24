import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TripBox from './';
import StartTripBox from './Start';

storiesOf('TripBox', module).add('default', () => (
  <TripBox
    name="Japan"
    id="japan"
    destination={{
      formattedAddress: 'Japan',
      position: { lat: 35.5493932, lng: 139.7798386 },
    }}
    requestDelete={action('requestDelete()')}
  />
));

storiesOf('TripBox/Start', module).add('default', () => <StartTripBox />);
