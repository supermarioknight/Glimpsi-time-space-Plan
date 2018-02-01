import styled from 'styled-components';
import * as grid from '../../assets/styles/grid';
import * as mixins from '../../assets/styles/mixins';
import * as transitions from '../../assets/styles/transitions';
import * as zIndex from '../../assets/styles/zIndex';
import colors, { keys } from '../../assets/styles/colors';

interface Props {
  appearance: 'warning' | 'info' | 'default';
}

// tslint:disable-next-line no-any
const getAppearance = (appearance: string): any => {
  switch (appearance) {
    case 'warning':
      return colors.notificationWarning;

    case 'info':
      return colors.notificationGood;

    default:
      return undefined;
  }
};

export const Root = styled.div.attrs({
  style: (props: Props) => ({
    [keys.notification]: getAppearance(props.appearance),
  }),
})`
  ${mixins.borderRadius};
  ${transitions.fade()};
  z-index: ${zIndex.notification};
  position: fixed;
  bottom: ${grid.px};
  left: ${grid.px};
  width: 100%;
  max-width: ${grid.unitless * 70}px;
  background-color: ${colors.notification};
  padding: ${grid.unitless * 2}px;
  color: ${colors.textLight};
`;
