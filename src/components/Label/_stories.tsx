import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Label from './';

storiesOf('Label', module).add('default', () => (
  <div>
    <Label>travel</Label>
    <Label>fun</Label>
    <Label>accom</Label>
    <Label>blah</Label>
  </div>
));
