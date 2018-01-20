import styled from 'styled-components';
import bp from '../../assets/styles/breakpoints';
import * as grid from '../../assets/styles/grid';

export const Root = styled.div`
  display: flex;

  > * {
    flex-shrink: 0;
  }

  ${bp.tablet.css`
    display: block;
  `};
`;

interface DayContainerProps {
  fade: boolean;
}

export const Day = styled.div`
  display: flex;
  padding-top: ${grid.unitless * 2}px;
  opacity: ${(props: DayContainerProps) => (props.fade ? '0.5' : '1')};

  ${bp.tablet.css`
    display: block;
  `};
`;
