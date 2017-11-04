// @flow

import React from 'react';
import styled from 'styled-components';

type Props = {
  onEdit: Function,
  onDelete: Function,
};

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1em;
  width: 50%;
  height: 100%;
  padding: 0;
`;

const CardActions = ({ onEdit, onDelete }: Props) => [
  <Button key="edit" onClick={onEdit}>
    edit
  </Button>,
  <Button key="delete" onClick={onDelete}>
    delete
  </Button>,
];

export default CardActions;
