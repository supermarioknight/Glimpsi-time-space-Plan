// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { image } from 'faker';
import { action } from '@storybook/addon-actions';
import Card from './';
import EditingCard from './Editing';
import EditableCard from './Editable';

storiesOf('Card', module)
  .add('start date', () => (
    <Card
      title="Valentines Day"
      location="Sapporo, Hokkaido, Japan"
      start="2017-11-04T01:38:55.430Z"
      image={image.city()}
    />
  ))
  .add('start and end date', () => (
    <Card
      title="Valentines Day"
      location="Sapporo, Hokkaido, Japan"
      start="2017-11-04T01:38:55.430Z"
      end="2017-11-04T01:50:55.430Z"
      image={image.city()}
    />
  ))
  .add('editing', () => (
    <EditingCard
      title="Valentines Day"
      location="Sapporo, Hokkaido, Japan"
      start="2017-11-04T01:38:55.430Z"
      end="2017-11-04T01:50:55.430Z"
      image={image.city()}
      onCancel={action('onCancel()')}
      onSave={action('onSave()')}
    />
  ))
  .add('editable', () => (
    <EditableCard
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
