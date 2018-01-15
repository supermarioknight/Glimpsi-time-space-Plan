import styled from 'styled-components';
import colors from '../../assets/styles/colors';
import bp from '../../assets/styles/breakpoints';

export const Button = styled.button`
  display: block;
  width: 100%;
  max-width: 150px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding: 10px;
  font-weight: bold;

  &:hover {
    background-color: ${colors.cardActionsBackground};
  }

  ${bp.tablet`
    max-width: auto;
  `};
`;
