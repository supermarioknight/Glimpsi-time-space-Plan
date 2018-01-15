import styled from 'styled-components';
import colors from '../../assets/styles/colors';

export const Button = styled.button`
  display: block;
  width: 100%;
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding: 10px;
  font-weight: bold;

  &:hover {
    background-color: ${colors.cardActionsBackground};
  }
`;
