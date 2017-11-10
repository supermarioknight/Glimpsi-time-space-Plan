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
  newCard: Function,
};

const ActionButton = ({ newCard }: Props) => (
  <Button onClick={block(newCard)}>
    Add
  </Button>
);

export default ActionButton;
