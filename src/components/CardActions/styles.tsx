import styled from 'styled-components';
import { Root as ButtonRoot } from '../Button/styles';
import * as grid from '../../assets/styles/grid';
import colors from '../../assets/styles/colors';

export const Root = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: ${grid.px};
  background-color: ${colors.cardBackground};

  ${ButtonRoot} {
    margin-left: ${grid.px};
  }
`;
