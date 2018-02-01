import * as React from 'react';
import NewCard, { Props } from './';
import Modal from '../Modal';

const NewCardModal: React.StatelessComponent<Props> = props => (
  <Modal onRequestClose={props.onCancel} appRoot={document.getElementById('root') as HTMLElement}>
    <NewCard {...props} />
  </Modal>
);

export default NewCardModal;
