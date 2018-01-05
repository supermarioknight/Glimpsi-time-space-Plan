import React from 'react';
import styled from 'styled-components';
import BestModal from 'react-best-modal';
import { Props } from 'react-best-modal/dist/BestModal';
import Blanket from '../Blanket';
import { colors, zIndex } from '../../assets/styles/variables';

export const FixedBestModal = styled(BestModal)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${zIndex.top};
`;

const Card = styled.div`
  background-color: ${colors.cardBackground};
  padding: 10px;
  position: relative;
  z-index: 1;
`;

const Modal: React.StatelessComponent<Props> = ({ children, ...props }) => (
  <FixedBestModal {...props}>
    <Blanket onClick={props.onRequestClose as any} />
    <Card>{children}</Card>
  </FixedBestModal>
);

export default Modal;
