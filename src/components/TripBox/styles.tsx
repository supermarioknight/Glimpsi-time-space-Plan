import styled from 'styled-components';
import * as grid from '../../assets/styles/grid';
import * as zIndex from '../../assets/styles/zIndex';
import * as fonts from '../../assets/styles/fonts';
import * as mixins from '../../assets/styles/mixins';
import colors from '../../assets/styles/colors';
import ConfirmButton from '../Button/Confirm';

export const Button = styled(ConfirmButton)`
  position: absolute;
  top: ${grid.px};
  right: ${grid.px};
  z-index: ${zIndex.actionButtons};
`;

export const Root = styled.div`
  ${mixins.focusRing.keyboardOnly};
  height: ${grid.unitless * 20}px;
  position: relative;
  cursor: pointer;
  list-style: none;
  text-align: center;

  ${Button} {
    transition: opacity 200ms ease-in-out;
    opacity: 0;
    pointer-events: none;
  }

  &:hover {
    ${Button} {
      opacity: 1;
      pointer-events: initial;
    }
  }
`;

export const Title = styled.h2`
  ${fonts.size.xxlarge};
  ${mixins.borderRadius};
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${grid.px};
  margin: 0;
  color: ${colors.textLight};
  background-color: ${colors.tripBoxBackground};
  z-index: ${zIndex.modal};
  text-transform: lowercase;
  letter-spacing: ${grid.unitless / 4}px;
  transition: background-color 200ms ease-in-out;

  &:hover,
  &:active {
    background-color: ${colors.tripBoxBackgroundHover};
  }
`;
