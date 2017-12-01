import * as React from 'react';
import styled from 'styled-components';
import bp from '../../assets/styles/breakpoints';

const WIDTH = '66px';
const SPACER = '30px';

const Button = styled.button`
  position: absolute;
  bottom: ${SPACER};
  right: ${SPACER};
  width: ${WIDTH};
  height: ${WIDTH};
  border-radius: 50%;
  cursor: pointer;
`;

const Spacer = styled.div`
  ${bp.tablet`
    height: 96px;
  `};
`;

const block = (cb: () => void) => (e: React.MouseEvent<HTMLElement>) => {
  e.preventDefault();
  cb();
};

interface Props {
  newCard: () => void;
}

// tslint:disable-next-line no-any
const ActionButton: React.StatelessComponent<Props> = ({ newCard }): any => [
  <Spacer key="spacer" />,
  <Button onClick={block(newCard)} key="button">
    Add
  </Button>,
];

export default ActionButton;
