import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { image } from 'faker';
import Card from './';

storiesOf('Card/Card', module).add('start date', () => (
  <Card
    title="Valentines Day"
    location="Sapporo, Hokkaido, Japan"
    start="2017-11-04T01:38:55.430Z"
    duration={30}
    image={image.city()}
  />
));
