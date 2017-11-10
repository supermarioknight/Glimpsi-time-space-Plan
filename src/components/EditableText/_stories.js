// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import EditableText from './';

storiesOf('EditableText', module)
  .add('default', () => (
    <EditableText
      name="textbox"
      label="Textbox"
      defaultValue="Cool Textbox!"
      onSave={action('onSave()')}
    />
  ));
