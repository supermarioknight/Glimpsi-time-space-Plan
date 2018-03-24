import styled from 'styled-components';
import { Root as Button } from './styles';
import * as grid from '../../assets/styles/grid';

const ButtonGroup = styled.div`
  text-align: right;

  > ${Button} {
    margin-left: ${grid.px};
  }
`;

export default ButtonGroup;
