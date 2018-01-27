import { css } from 'styled-components';

type TransitionState = 'entering' | 'entered' | 'exited' | 'exiting';

const fadeMap = {
  entering: 0,
  entered: 1,
  exiting: 1,
  exited: 0,
};

export interface TransitionProps {
  state: TransitionState;
}

export const fade = css`
  opacity: ${(props: TransitionProps) => fadeMap[props.state] || 0};
  transition: 500ms opacity ease-in-out;
`;
