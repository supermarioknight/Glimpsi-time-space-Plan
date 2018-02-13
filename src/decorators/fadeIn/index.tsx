import * as React from 'react';
import styled from 'styled-components';
import * as transitions from '../../assets/styles/transitions';
import Transition from 'react-transition-group/Transition';

const time = 300;

const withFadeIn = <TProps extends {}>(
  WrappedComponent: React.ComponentType<TProps>
): React.StatelessComponent<TProps> => {
  const TransitionRoot = styled(WrappedComponent)`
    ${transitions.absoluteFade(time)};
  `;

  return (props: TProps) => (
    <Transition in appear timeout={time}>
      {(state: transitions.TransitionState) => <TransitionRoot state={state} {...props} />}
    </Transition>
  );
};

export default withFadeIn;
