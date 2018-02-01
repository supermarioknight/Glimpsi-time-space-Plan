import * as React from 'react';
import { BusyChildren, BusySpinner } from './styles';
import Button, { Props as ButtonProps } from './';
import Transition from 'react-transition-group/Transition';
import { TransitionState } from '../../assets/styles/transitions';

interface Props extends ButtonProps {
  busy: boolean;
}

const BusyButton: React.StatelessComponent<Props> = ({ busy, children, ...props }) => (
  <Button {...props} disabled={busy}>
    <Transition in={busy} timeout={50} mountOnEnter unmountOnExit appear>
      {(state: TransitionState) => <BusySpinner state={state}>loading...</BusySpinner>}
    </Transition>

    <BusyChildren busy={busy}>{children}</BusyChildren>
  </Button>
);

export default BusyButton;
