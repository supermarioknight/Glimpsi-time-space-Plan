import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Toggler from '../Toggler';
import Modal from './';

storiesOf('Modal', module).add('default', () => (
  <Toggler>
    {({ toggle, shown }) => (
      <React.Fragment>
        <Modal appRoot={document.body} onRequestClose={toggle} in={shown}>
          <p>cool modal</p>
        </Modal>

        <button onClick={toggle}>click me</button>
      </React.Fragment>
    )}
  </Toggler>
));
