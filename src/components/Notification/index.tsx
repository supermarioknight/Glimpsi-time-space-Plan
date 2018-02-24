import * as React from 'react';
import { Root, CancelButton } from './styles';

interface Props {
  children: React.ReactNode;
  appearance: 'warning' | 'info' | 'default';
  requestClose: () => void;
  hideCloseButton?: boolean;
}

// TODO: Replace hide close button with optional "action" override (pass in your own component)

const Notification: React.StatelessComponent<Props> = ({
  children,
  requestClose,
  hideCloseButton,
  ...props
}) => (
  <Root role="alert" {...props}>
    {children}
    {hideCloseButton ? undefined : <CancelButton onClick={requestClose}>close</CancelButton>}
  </Root>
);

export default Notification;
