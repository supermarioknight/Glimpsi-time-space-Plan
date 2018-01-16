import styled from 'styled-components';
import bp from '../../assets/styles/breakpoints';

export const Root = styled.div`
  display: flex;

  > * {
    flex-shrink: 0;
  }

  ${bp.tablet.css`
    display: block;
  `};
`;

export const Date = styled.button`
  padding: 20px 10px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

interface DayContainerProps {
  fade: boolean;
}

export const Day = styled.div`
  display: flex;
  opacity: ${(props: DayContainerProps) => (props.fade ? '0.5' : '1')};

  ${bp.tablet.css`
    display: block;
  `};
`;
