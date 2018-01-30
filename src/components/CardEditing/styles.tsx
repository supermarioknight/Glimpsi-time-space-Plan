import styled from 'styled-components';
import * as grid from '../../assets/styles/grid';

export const MapContainer = styled.div`
  height: ${grid.unitless * 40}px;
  width: ${grid.unitless * 50}px;
  margin-right: ${grid.px};
`;

export const Root = styled.div`
  display: flex;
  align-items: center;
`;

export const Form = styled.form`
  width: 100%;
`;
