import styled from 'styled-components';
import Notification from '../Notification';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import * as transitions from '../../assets/styles/transitions';
import * as grid from '../../assets/styles/grid';

export const Root = styled(TransitionGroup)`
  top: calc(100vh - ${grid.unitless * 12}px);
  position: fixed;
  left: ${grid.px};
  right: ${grid.px};
`;

export const FadeInNotification = styled(Notification)`
  ${transitions.fade()};
  margin-bottom: ${grid.px};
  transition: 200ms opacity ease-in-out, 200ms transform ease-in-out;
`;
