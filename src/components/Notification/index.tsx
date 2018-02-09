import * as React from 'react';
import { Root, CancelButton } from './styles';

interface Props {
  children: React.ReactNode;
  appearance: 'warning' | 'info' | 'default';
  requestClose: () => void;
}

const Notification: React.StatelessComponent<Props> = ({ children, requestClose, ...props }) => (
  <Root role="alert" {...props}>
    {children}

    <CancelButton onClick={requestClose}>close</CancelButton>
  </Root>
);

export default Notification;
