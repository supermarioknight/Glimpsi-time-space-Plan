import styled from 'styled-components';
import { Root as ButtonRoot } from '../Button/styles';
import * as grid from '../../assets/styles/grid';

export const Root = styled.div`
  position: absolute;
  top: ${grid.px};
  right: ${grid.px};

  ${ButtonRoot} {
    margin-left: ${grid.px};
  }
`;
