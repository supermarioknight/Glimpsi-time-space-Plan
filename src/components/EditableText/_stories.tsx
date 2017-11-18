import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import EditableText from './';

storiesOf('Text/Editable', module).add('default', () => (
  <EditableText label="Textbox" defaultValue="Cool Textbox!" onSave={action('onSave()')} />
));
