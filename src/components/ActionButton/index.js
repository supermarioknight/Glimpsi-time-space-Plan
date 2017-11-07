// @flow

import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
`;

const block = (cb) => (e) => {
  e.preventDefault();
  cb();
};

type Props = {
  onNewCard: Function,
};

const ActionButton = ({ onNewCard }: Props) => (
  <Button onClick={block(onNewCard)}>
    Add
  </Button>
);

export default ActionButton;
