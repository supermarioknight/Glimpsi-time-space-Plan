import styled from 'styled-components';
import * as mixins from '../../assets/styles/mixins';
import colors, { keys } from '../../assets/styles/colors';
import * as grid from '../../assets/styles/grid';
import { Theme } from './';

interface Props {
  appearance: Theme;
}

const buildVars = (appearance: Theme): any => {
  switch (appearance) {
    case 'secondary':
      return {
        [keys.button]: colors.buttonSecondary,
        [keys.buttonHover]: colors.buttonSecondaryHover,
        [keys.buttonText]: colors.buttonSecondaryText,
        [keys.buttonClick]: colors.buttonSecondaryClick,
      };

    case 'transparent':
      return {
        [keys.button]: colors.buttonTransparent,
        [keys.buttonHover]: colors.buttonTransparentHover,
        [keys.buttonText]: colors.buttonTransparentText,
        [keys.buttonClick]: colors.buttonTransparentClick,
      };

    default:
      return {};
  }
};

export const Root = styled.button.attrs({
  style: (props: Props) => buildVars(props.appearance),
})`
  ${mixins.focusRing.keyboardOnly};
  ${mixins.borderRadius};
  padding: ${grid.px} ${grid.unitless * 2}px;
  background-color: ${colors.button};
  border: 1px solid ${colors.button};
  color: ${colors.buttonText};
  transition: 0.2s background-color, 0.2s border-color;

  :hover {
    background-color: ${colors.buttonHover};
    border-color: ${colors.buttonHover};
  }

  :active {
    background-color: ${colors.buttonClick};
    border-color: ${colors.buttonClick};
  }
`;
