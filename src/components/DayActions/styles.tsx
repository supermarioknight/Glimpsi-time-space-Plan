import styled from 'styled-components';
import colors from '../../assets/styles/colors';
import * as fonts from '../../assets/styles/fonts';

export const Button = styled.button`
  ${fonts.weight.thick};
  display: block;
  width: 100%;
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding: 10px;

  &:hover {
    background-color: ${colors.cardActionsBackground};
  }
`;
