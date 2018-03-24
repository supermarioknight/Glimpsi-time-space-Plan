import styled from 'styled-components';
import * as grid from '../../assets/styles/grid';
import colors from '../../assets/styles/colors';

export const Field = styled.div`
  margin-bottom: ${grid.px};
`;

export const Error = styled.div`
  color: ${colors.negative};
  height: ${grid.unitless * 2}px;
`;
