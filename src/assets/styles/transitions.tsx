import { css } from 'styled-components';

export type TransitionState = 'entering' | 'entered' | 'exited' | 'exiting';

const fadeMap = {
  entering: 0,
  entered: 1,
  exiting: 0,
  exited: 0,
};

const upMap = {
  entering: '25%',
  entered: '0%',
  exiting: '0%',
  exited: '0%',
};

export interface TransitionProps {
  state: TransitionState;
}

export const fade = (ms: number = 500) => css`
  opacity: ${(props: TransitionProps) => fadeMap[props.state] || fadeMap.entering};
  transition: ${ms}ms opacity ease-in-out;
`;

export const fadeUp = (ms: number = 200) => css`
  opacity: ${(props: TransitionProps) => fadeMap[props.state] || fadeMap.entering};
  transform: translate3d(0, ${(props: TransitionProps) => upMap[props.state] || upMap.entering}, 0);
  transition: ${ms}ms opacity ease-out, ${ms * 2}ms transform ease-out;
`;

const upLeaveMap = {
  entering: '0%',
  entered: '0%',
  exiting: '-100%',
  exited: '-100%',
};

export const fadeUpLeave = (ms: number = 200) => css`
  opacity: ${(props: TransitionProps) => fadeMap[props.state] || fadeMap.entering};
  transform: translate3d(
    0,
    ${(props: TransitionProps) => upLeaveMap[props.state] || upLeaveMap.entering},
    0
  );
  transition: ${ms}ms opacity ease-out, ${ms * 2}ms transform ease-out;
`;
