import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import { image } from 'faker';
import CardActions from './';

const Box = styled.div`
  height: 150px;
  width: 150px;
  background-image: url(${image.animals()});
  background-color: black;
  background-size: cover;
`;

storiesOf('Card/Actions', module).add('default', () => (
  <CardActions onEdit={action('onEdit()')} onDelete={action('onDelete()')}>
    <Box />
  </CardActions>
));
