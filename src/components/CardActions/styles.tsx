import styled from 'styled-components';
import ConfirmButton from '../ConfirmButton';
import { colors } from '../../assets/styles/variables';

export const Root = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${colors.cardActionsBackground};
`;

export const ConfirmButtonStyled = styled(ConfirmButton)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 1em;
  padding: 5px;
`;

export const Button = ConfirmButtonStyled.withComponent('button');
