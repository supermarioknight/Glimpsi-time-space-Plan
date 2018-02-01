import React from 'react';
import { Props as ModalProps } from 'react-best-modal/dist/BestModal';
import Transition from 'react-transition-group/Transition';
import Blanket from '../Blanket';
import { TransitionState } from '../../assets/styles/transitions';
import { FixedBestModal, Card } from './styles';

interface Props extends ModalProps {
  onRequestClose: () => void;
}

const Modal: React.StatelessComponent<Props> = ({ children, ...props }) => (
  <FixedBestModal {...props}>
    <Blanket onClick={props.onRequestClose} />
    <Transition in timeout={50} appear>
      {(state: TransitionState) => <Card state={state}>{children}</Card>}
    </Transition>
  </FixedBestModal>
);

export default Modal;
