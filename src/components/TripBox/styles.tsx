import styled from 'styled-components';
import * as grid from '../../assets/styles/grid';
import * as zIndex from '../../assets/styles/zIndex';
import * as fonts from '../../assets/styles/fonts';
import * as mixins from '../../assets/styles/mixins';
import colors from '../../assets/styles/colors';

export const Root = styled.div`
  ${mixins.focusRing.keyboardOnly};
  width: ${grid.unitless * 30}px;
  height: ${grid.unitless * 20}px;
  position: relative;
  cursor: pointer;
  list-style: none;
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

  &:hover,
  &:active {
    background-color: ${colors.tripBoxBackgroundHover};
  }
`;
