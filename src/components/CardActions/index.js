// @flow

import React from 'react';
import styled from 'styled-components';

type Props = {
  onEdit: Function,
  onDelete: Function,
};

const Root = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
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
