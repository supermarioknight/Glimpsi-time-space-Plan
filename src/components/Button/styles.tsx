import styled from 'styled-components';
import * as mixins from '../../assets/styles/mixins';
import colors, { keys } from '../../assets/styles/colors';
import * as grid from '../../assets/styles/grid';
import * as fonts from '../../assets/styles/fonts';

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

  :hover {
    background-color: ${colors.buttonHover};
  }

  :active {
    background-color: ${colors.buttonClick};
  }
`;
