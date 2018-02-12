import styled, { css } from 'styled-components';
import * as grid from '../../assets/styles/grid';
import bp from '../../assets/styles/breakpoints';

const gutter = (size: number) => css`
  margin-left: ${size}px;
  margin-right: ${size}px;
`;

export const Gutter = styled.div`
  ${gutter(grid.unitless)};

  ${bp.tablet.css`
    ${gutter(grid.unitless * 4)};
  `};

  ${bp.desktop.css`
    ${gutter(grid.unitless * 8)};
  `};

  ${bp.desktopHd.css`
    ${gutter(grid.unitless * 16)};
  `};
`;

export const CenteredGutter = Gutter.extend`
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
