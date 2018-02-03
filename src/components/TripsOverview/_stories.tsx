import * as React from 'react';
import { storiesOf } from '@storybook/react';
import TripsOverview from './';

storiesOf('TripsOverview', module).add('no trips', () => <TripsOverview trips={[]} />);
