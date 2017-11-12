import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Textbox from './';

storiesOf('Textbox', module)
  .add('default', () => (
    <Textbox
      name="text"
      label="Sweet"
      value="Tokyo, Japan"
      onChange={action('onChange()')}
      onBlur={action('onBlur()')}
    />
  ));
