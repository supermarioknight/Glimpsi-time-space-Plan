import * as React from 'react';
import styled from 'styled-components';

const Button = styled.button``;

const block = (cb: () => void) => (e: React.MouseEvent<HTMLElement>) => {
  e.preventDefault();
  cb();
};

interface Props {
  newCard: () => void;
}

const ActionButton: React.StatelessComponent<Props> = ({ newCard }) => (
  <Button onClick={block(newCard)}>Add</Button>
);

export default ActionButton;
