import { css } from 'styled-components';

export type TransitionState = 'entering' | 'entered' | 'exited' | 'exiting';

const fadeMap = {
  entering: 0,
  entered: 1,
  exiting: 1,
  exited: 0,
};

export interface TransitionProps {
  state: TransitionState;
}

export const fade = (ms: number = 500) => css`
  opacity: ${(props: TransitionProps) => fadeMap[props.state] || 0};
  transition: ${ms}ms opacity ease-in-out;
`;
