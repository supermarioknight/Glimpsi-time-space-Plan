import * as React from 'react';
import styled from 'styled-components';
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

const Button = styled.button`
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

const CardActions = ({ onEdit, onDelete }: Props) => (
  <Root>
    <Button key="edit" onClick={onEdit}>
      edit
    </Button>
    <Button key="delete" onClick={onDelete}>
      delete
    </Button>
  </Root>
);

export default CardActions;
