import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Label, { LabelGroup } from './';

storiesOf('Label', module)
  .add('default', () => (
    <div>
      <Label>travel</Label>
      <Label>fun</Label>
      <Label>accom</Label>
      <Label>blah</Label>
    </div>
  ))
  .add('grouped', () => (
    <LabelGroup>
      <Label>travel</Label>
      <Label>fun</Label>
      <Label>accom</Label>
      <Label>blah</Label>
    </LabelGroup>
  ));
