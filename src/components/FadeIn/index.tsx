import * as React from 'react';
import Transition from 'react-transition-group/Transition';
import styled from 'styled-components';
import * as transitions from '../../assets/styles/transitions';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const time = 200;

const TransitionRoot = styled.div`
  ${transitions.fadeIn(time)};
`;

const FadeIn: React.StatelessComponent<Props> = ({ children, className }) => (
  <Transition in appear timeout={time}>
    {(state: transitions.TransitionState) => (
      <TransitionRoot state={state} className={className}>
        {children}
      </TransitionRoot>
    )}
  </Transition>
);

export default FadeIn;
