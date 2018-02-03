import * as React from 'react';
import { storiesOf } from '@storybook/react';
import TripBox from './';
import StartTripBox from './Start';

storiesOf('TripBox', module).add('default', () => (
  <TripBox
    name="Japan"
    key="japan"
    destination={{
      formattedAddress: 'Japan',
      position: { lat: 35.5493932, lng: 139.7798386 },
    }}
  />
));

storiesOf('TripBox/Start', module).add('default', () => <StartTripBox />);
