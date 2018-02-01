import * as React from 'react';
import { BusyChildren, BusySpinner } from './styles';
import Button, { Props as ButtonProps } from './';

interface Props extends ButtonProps {
  busy: boolean;
}

const BusyButton: React.StatelessComponent<Props> = ({ busy, children, ...props }) => (
  <Button {...props} disabled={busy}>
    {busy && <BusySpinner>loading...</BusySpinner>}
    <BusyChildren busy={busy}>{children}</BusyChildren>
  </Button>
);

export default BusyButton;
