import { css } from 'styled-components';

export type TransitionState = 'entering' | 'entered' | 'exited' | 'exiting';

const fadeMap = {
  entering: 0,
  entered: 1,
  exiting: 0,
  exited: 0,
};

const fadeInMap = {
  entering: 0,
  entered: 1,
  exiting: 1,
  exited: 1,
};

const upMap = {
  entering: '25%',
  entered: '0%',
  exiting: '0%',
  exited: '0%',
};

const positionMap = {
  entering: 'absolute',
  entered: 'initial',
  exiting: 'absolute',
  exited: 'initial',
};

export interface TransitionProps {
  state: TransitionState;
}

export const fade = (ms: number = 500) => css`
  opacity: ${(props: TransitionProps) => fadeMap[props.state] || fadeMap.entering};
  transition: ${ms}ms opacity ease-in-out;
`;

export const absoluteFade = (ms: number = 500) => css`
  position: ${(props: TransitionProps) => positionMap[props.state] || positionMap.entering};
  opacity: ${(props: TransitionProps) => fadeMap[props.state] || fadeMap.entering};
  transition: ${ms}ms opacity ease-in-out;
  top: 0;
  left: 0;
  right: 0;
`;

export const fadeIn = (ms: number = 500) => css`
  opacity: ${(props: TransitionProps) => fadeInMap[props.state] || fadeInMap.entering};
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
