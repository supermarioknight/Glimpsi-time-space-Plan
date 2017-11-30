import * as React from 'react';
import styled from 'styled-components';
import ConfirmButton from '../ConfirmButton';
import { colors } from '../../assets/styles/variables';

interface Props {
  onEdit: (e: React.MouseEvent<HTMLElement>) => void;
  onDelete: (e: React.MouseEvent<HTMLElement>) => void;
}

const Root = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${colors.cardActionsBackground};
`;

const ConfirmButtonStyled = styled(ConfirmButton)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  color: white;
  font-size: 1em;
  width: 50%;
  height: 100%;
  padding: 0;
`;

export const Button = ConfirmButtonStyled.withComponent('button');

const CardActions = ({ onEdit, onDelete }: Props) => (
  <Root>
    <Button key="edit" onClick={onEdit}>
      edit
    </Button>

    <ConfirmButtonStyled key="delete" onClick={onDelete}>
      delete
    </ConfirmButtonStyled>
  </Root>
);

export default CardActions;
