import * as React from 'react';
import Transition from 'react-transition-group/Transition';
import styled from 'styled-components';
import * as transitions from '../../assets/styles/transitions';

interface Props {
  children: React.ReactNode;
}

const time = 200;

const TransitionRoot = styled.div`
  ${transitions.fade(time)};
  height: 100%;
`;

const FadeIn: React.StatelessComponent<Props> = ({ children }) => (
  <Transition in appear timeout={time}>
    {(state: transitions.TransitionState) => (
      <TransitionRoot state={state}>{children}</TransitionRoot>
    )}
  </Transition>
);

export default FadeIn;
