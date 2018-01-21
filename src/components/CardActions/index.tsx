import * as React from 'react';
import { Root } from './styles';
import ConfirmButton from '../ConfirmButton';
import Button from '../Button';

interface Props {
  onEdit: (e: React.MouseEvent<HTMLElement>) => void;
  onDelete: (e: React.MouseEvent<HTMLElement>) => void;
}

const CardActions = ({ onEdit, onDelete }: Props) => (
  <Root>
    <ConfirmButton onClick={onDelete}>delete</ConfirmButton>
    <Button onClick={onEdit}>edit</Button>
  </Root>
);

export default CardActions;
