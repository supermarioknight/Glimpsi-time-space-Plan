import styled from 'styled-components';
import * as mixins from '../../assets/styles/mixins';
import colors, { keys } from '../../assets/styles/colors';
import * as grid from '../../assets/styles/grid';
import * as fonts from '../../assets/styles/fonts';
import * as transitions from '../../assets/styles/transitions';

export type Theme = 'default' | 'positive' | 'negative' | 'transparent';

interface Props {
  appearance: Theme;
}

// tslint:disable-next-line no-any
const buildVars = (appearance: Theme): any => {
  switch (appearance) {
    case 'positive':
      return {
        [keys.button]: colors.buttonPositive,
        [keys.buttonHover]: colors.buttonPositiveHover,
        [keys.buttonText]: colors.buttonPositiveText,
        [keys.buttonClick]: colors.buttonPositiveClick,
      };

    case 'negative':
      return {
        [keys.button]: colors.buttonNegative,
        [keys.buttonHover]: colors.buttonNegativeHover,
        [keys.buttonText]: colors.buttonNegativeText,
        [keys.buttonClick]: colors.buttonNegativeClick,
      };

    case 'transparent':
      return {
        [keys.button]: colors.buttonTransparent,
        [keys.buttonHover]: colors.buttonTransparentHover,
        [keys.buttonText]: colors.buttonTransparentText,
        [keys.buttonClick]: colors.buttonTransparentClick,
      };

    case 'default':
    default:
      return {};
  }
};

interface BusyProps {
  busy: boolean;
}

export const BusyChildren = styled.span`
  opacity: ${(props: BusyProps) => (props.busy ? 0 : 1)};
  transition: 0.2s opacity ease-in-out;
`;

export const BusySpinner = styled.span`
  ${transitions.fade(20)};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Root = styled.button.attrs({
  style: (props: Props) => buildVars(props.appearance),
})`
  ${mixins.focusRing.keyboardOnly};
  ${mixins.borderRadius};
  ${fonts.weight.thickish};
  cursor: pointer;
  padding: ${grid.px} ${grid.unitless * 2}px;
  background-color: ${colors.button};
  color: ${colors.buttonText};
  border: none;
  transition: 0.2s background-color;
  position: relative;

  :hover {
    background-color: ${colors.buttonHover};
  }

  :active {
    background-color: ${colors.buttonClick};
  }

  &[disabled] {
    background-color: ${colors.buttonHover};
    cursor: default;
  }
`;
