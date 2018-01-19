import styled from 'styled-components';
import colors from '../../assets/styles/colors';
import * as grid from '../../assets/styles/grid';
import * as fonts from '../../assets/styles/fonts';
import * as mixins from '../../assets/styles/mixins';

export const Root = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.textLight};
`;

export const Button = styled.button`
  ${mixins.borderRadius};
  ${mixins.focusRing.keyboardOnly};
  ${fonts.size.regular};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${grid.px} ${grid.unitless * 2}px;
  border: 1px solid transparent;
  background-color: transparent;
  cursor: pointer;
`;
