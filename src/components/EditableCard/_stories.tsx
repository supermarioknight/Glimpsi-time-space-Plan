import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import EditableCard from './';

storiesOf('Card/Editable', module).add('with values', () => (
  <EditableCard
    id={1}
    title="Valentines Day"
    location="Sapporo, Hokkaido, Japan"
    start="2017-11-04T01:38:55.430Z"
    duration={30}
    onSave={action('onSave()')}
    onDelete={action('onDelete()')}
  />
));
