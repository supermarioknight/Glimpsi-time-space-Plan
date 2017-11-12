import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { image } from 'faker';
import { action } from '@storybook/addon-actions';
import CardEditing from './';

storiesOf('CardEditing', module)
  .add('with values', () => (
    <CardEditing
      title="Valentines Day"
      location="Sapporo, Hokkaido, Japan"
      start="2017-11-04T01:38:55.430Z"
      end="2017-11-04T01:50:55.430Z"
      image={image.city()}
      onCancel={action('onCancel()')}
      onSave={action('onSave()')}
    />
  ));
