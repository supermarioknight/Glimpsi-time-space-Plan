import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Modal from './';

storiesOf('Modal', module).add('default', () => (
  <Modal appRoot={document.body} onRequestClose={action('onRequestClose()')}>
    cool modal
  </Modal>
));
