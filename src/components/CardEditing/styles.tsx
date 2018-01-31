import styled from 'styled-components';
import * as grid from '../../assets/styles/grid';

export const Root = styled.div``;

export const MapContainer = styled.div`
  height: ${grid.unitless * 20}px;
  width: 100%;
  margin-bottom: ${grid.px};
  flex-shrink: 0;
`;

export const Form = styled.form`
  width: 100%;
`;
