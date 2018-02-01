import styled from 'styled-components';
import colors from '../../assets/styles/colors';
import bp from '../../assets/styles/breakpoints';
import * as grid from '../../assets/styles/grid';
import * as fonts from '../../assets/styles/fonts';
import { Root as ActionsRoot } from '../TimelineActions/styles';

export const Root = styled.header`
  display: flex;
  align-items: center;
  height: ${grid.unitless * 7}px;
  padding: 0 ${grid.unitless * 2}px;
  background-color: ${colors.header};
  color: ${colors.textLight};
  flex-shrink: 0;

  ${bp.tablet.css`
    height: ${grid.unitless * 8}px;
  `};

  ${bp.desktop.css`
    height: ${grid.unitless * 9}px;
  `};

  ${ActionsRoot} {
    margin-left: auto;
  }
`;

export const PageHeading = styled.h1`
  ${fonts.size.xlarge};
  ${fonts.weight.thin};
`;
