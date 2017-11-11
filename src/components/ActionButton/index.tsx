// @flow

import * as React from 'react';
import styled from 'styled-components';

const Button = styled.button`
`;

const block = (cb: Function) => (e: React.MouseEvent<HTMLElement>) => {
  e.preventDefault();
  cb();
};

interface Props {
  newCard: Function,
};

const ActionButton = ({ newCard }: Props) => (
  <Button onClick={block(newCard)}>
    Add
  </Button>
);

export default ActionButton;
