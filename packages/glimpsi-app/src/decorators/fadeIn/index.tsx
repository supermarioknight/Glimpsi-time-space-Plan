import * as React from 'react';
import styled from 'styled-components';
import * as transitions from '../../assets/styles/transitions';
import Transition from 'react-transition-group/Transition';

const time = 300;

function withFadeIn<TProps extends {}>(
  WrappedComponent: React.ComponentType<TProps>
): React.StatelessComponent<TProps> {
  const TransitionRoot = styled<{}>(WrappedComponent)`
    ${transitions.absoluteFade(time)};
  `;

  return (props: TProps) => (
    <Transition in timeout={time}>
      {(state: transitions.TransitionState) => (
        // Types are fucked, don't know why.
        // tslint:disable-next-line prefer-object-spread
        <TransitionRoot {...Object.assign({ state }, props)} />
      )}
    </Transition>
  );
}

export default withFadeIn;
