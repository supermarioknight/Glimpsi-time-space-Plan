import styled from 'styled-components';
import * as grid from '../../assets/styles/grid';

const TripBoxGroup = styled.div`
  display: grid;
  grid-gap: ${grid.px};
  grid-template-columns: fit-content(100%) fit-content(100%) 1fr;
  padding: 0;
  margin: 0;
`;

export default TripBoxGroup;
