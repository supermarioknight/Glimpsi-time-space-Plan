import styled from 'styled-components';
import colors from '../../assets/styles/colors';
import * as grid from '../../assets/styles/grid';

export const Root = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.textLight};

  > * {
    margin-left: ${grid.px};
  }
`;

export const Text = styled.span`
  color: ${colors.textLight};
`;
