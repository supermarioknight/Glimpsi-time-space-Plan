import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../../assets/styles/colors';
import bp from '../../assets/styles/breakpoints';
import * as grid from '../../assets/styles/grid';
import * as fonts from '../../assets/styles/fonts';
import { Root as ActionsRoot } from '../TimelineActions/styles';

interface Props {
  appearance: 'default' | 'transparent';
}

export const Root = styled.header`
  display: flex;
  align-items: center;
  height: ${grid.unitless * 7}px;
  padding: 0 ${grid.unitless * 2}px;
  flex-shrink: 0;

  ${(props: Props) =>
    props.appearance === 'transparent'
      ? css`
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background-color: transparent;
          color: ${colors.textDark};
        `
      : css`
          background-color: ${colors.header};
          color: ${colors.textLight};
        `};

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

export const HeadingLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  margin-right: auto;
`;
