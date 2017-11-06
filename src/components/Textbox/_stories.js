// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Textbox from './';

storiesOf('Textbox', module)
  .add('default', () => (
    <Textbox
      id="textbox"
      label="Sweet"
      value="Tokyo, Japan"
      onChange={action('onChange()')}
    />
  ));
