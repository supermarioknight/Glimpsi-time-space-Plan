import styled from 'styled-components';
import bp from '../../assets/styles/breakpoints';

export const Root = styled.main`
  display: flex;
  flex-grow: 1;
  height: 100%;
  flex-direction: column;

  ${bp.tablet`
  flex-direction: row;
`};
`;

export const RightColumn = styled.div`
  flex-shrink: 0;
  overflow: auto;
`;

export const MapContainer = styled.div`
  display: flex;
  height: 100%;
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
`;
