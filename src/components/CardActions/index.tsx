import * as React from 'react';
import { Root, Button, ConfirmButtonStyled } from './styles';

interface Props {
  onEdit: (e: React.MouseEvent<HTMLElement>) => void;
  onDelete: (e: React.MouseEvent<HTMLElement>) => void;
}

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
