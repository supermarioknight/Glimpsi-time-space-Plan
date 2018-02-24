import React from 'react';
import { Props as ModalProps } from 'react-best-modal/dist/BestModal';
import Transition from 'react-transition-group/Transition';
import { TransitionState } from '../../assets/styles/transitions';
import { FixedBestModal, Card, Blanket } from './styles';

interface Props extends ModalProps {
  onRequestClose: () => void;
  in: boolean;
}

const Modal: React.StatelessComponent<Props> = ({ children, ...props }) => (
  <Transition in={props.in} timeout={200} appear mountOnEnter unmountOnExit>
    {(state: TransitionState) => (
      <FixedBestModal {...props}>
        <React.Fragment>
          <Blanket onClick={props.onRequestClose} state={state} />
          <Card state={state}>{children}</Card>
        </React.Fragment>
      </FixedBestModal>
    )}
  </Transition>
);

export default Modal;
