import React from 'react';
import { Props as ModalProps } from 'react-best-modal/dist/BestModal';
import Blanket from '../Blanket';
import { FixedBestModal, Card } from './styles';

interface Props extends ModalProps {
  onRequestClose: () => void;
}

const Modal: React.StatelessComponent<Props> = ({ children, ...props }) => (
  <FixedBestModal {...props}>
    <Blanket onClick={props.onRequestClose} />
    <Card>{children}</Card>
  </FixedBestModal>
);

export default Modal;
