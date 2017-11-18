import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { image } from 'faker';
import { action } from '@storybook/addon-actions';
import CardEditing from './';

storiesOf('Card/Editing', module).add('with values', () => (
  <CardEditing
    title="Valentines Day"
    location="Sapporo, Hokkaido, Japan"
    start="2017-11-04T01:38:55.430Z"
    duration={30}
    image={image.city()}
    onCancel={action('onCancel()')}
    onSave={action('onSave()')}
  />
));
