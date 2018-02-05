import styled from 'styled-components';
import * as grid from '../../assets/styles/grid';
import bp from '../../assets/styles/breakpoints';

const TripBoxGroup = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;

  ${bp.phone.css`
    display: grid;
    grid-gap: ${grid.px};
    grid-template-columns: repeat(auto-fit, 250px);
    justify-content: center;
  `};
`;

export default TripBoxGroup;
