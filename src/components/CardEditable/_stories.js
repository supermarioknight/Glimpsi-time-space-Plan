// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { image } from 'faker';
import { action } from '@storybook/addon-actions';
import CardEditable from './';

storiesOf('CardEditable', module)
  .add('with values', () => (
    <CardEditable
      id={1}
      title="Valentines Day"
      location="Sapporo, Hokkaido, Japan"
      start="2017-11-04T01:38:55.430Z"
      end="2017-11-04T01:50:55.430Z"
      image={image.city()}
      onSave={action('onSave()')}
      onDelete={action('onDelete()')}
    />
  ));
