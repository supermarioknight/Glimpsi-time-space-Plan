import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { colors, zIndex } from '../../assets/styles/variables';

const ModalRoot = styled.div`
  padding: 10px;
  border-radius: 2px;
  background-color: ${colors.modalBackground};
  min-width: 400px;
  max-width: 600px;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${zIndex.top};
  background-color: ${colors.modalOverlay};
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface Props {
  children: React.ReactNode;
}

// tslint:disable-next-line no-any
const Modal: React.StatelessComponent<Props> = ({ children }): any =>
  ReactDOM.createPortal(
    <Overlay>
      <ModalRoot>{children}</ModalRoot>
    </Overlay>,
    document.body
  );

export default Modal;
