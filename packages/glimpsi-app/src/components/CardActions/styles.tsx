import styled from 'styled-components';
import * as grid from '../../assets/styles/grid';
import colors from '../../assets/styles/colors';
import ButtonGroup from '../Button/Group';

export const Root = styled(ButtonGroup)`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${grid.px};
  background-color: ${colors.cardBackground};
`;
