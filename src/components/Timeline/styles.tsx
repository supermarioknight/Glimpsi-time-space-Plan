import styled from 'styled-components';
import bp from '../../assets/styles/breakpoints';

export const Root = styled.div`
  display: flex;
  width: 350px;
  padding: 0 12px;

  > * {
    flex-shrink: 0;
  }

  ${bp.tablet`
  display: block;
  width: 300px;
`} ${bp.desktop`
  width: 400px;
`};
`;

export const Date = styled.div`
  padding: 20px 10px;
`;

interface DayContainerProps {
  withinFilters: boolean;
}

export const Day = styled.div`
  opacity: ${(props: DayContainerProps) => (props.withinFilters ? '1' : '0.5')};
`;
