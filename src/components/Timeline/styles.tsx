import styled, { css } from 'styled-components';
import * as grid from '../../assets/styles/grid';
import * as mixins from '../../assets/styles/mixins';

export const Root = styled.div`
  display: block;

  > * {
    flex-shrink: 0;
  }
`;

interface DayContainerProps {
  fade: boolean;
}

export const Day = styled.div`
  display: block;
  padding-top: ${grid.unitless * 2}px;
  ${(props: DayContainerProps) =>
    mixins.applyIf(
      props.fade,
      css`
        opacity: 0.5;
        filter: grayscale();
      `
    )};
  transition: opacity 0.2s;
`;
