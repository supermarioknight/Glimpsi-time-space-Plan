import React from 'react';
import styled from 'styled-components';
import BestModal from 'react-best-modal';
import { Props as ModalProps } from 'react-best-modal/dist/BestModal';
import Blanket from '../Blanket';
import colors from '../../assets/styles/colors';
import * as zIndex from '../../assets/styles/zIndex';

export const FixedBestModal = styled(BestModal)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${zIndex.modal};
`;

const Card = styled.div`
  background-color: ${colors.cardBackground};
  padding: 10px;
  position: relative;
  z-index: 1;
`;

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
