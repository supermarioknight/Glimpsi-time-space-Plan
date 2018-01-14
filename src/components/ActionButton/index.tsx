import * as React from 'react';
import styled from 'styled-components';
import LabelSelect from '../LabelSelect';
import bp from '../../assets/styles/breakpoints';

const WIDTH = '66px';
const SPACER = '30px';

const Container = styled.div`
  position: absolute;
  bottom: ${SPACER};
  right: ${SPACER};
`;

const Button = styled.button`
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
  onLabelFilter: (labels: string[]) => void;
  labels: string[];
}

// tslint:disable-next-line no-any
const ActionButton: React.StatelessComponent<Props> = ({ newCard, onLabelFilter, labels }): any => [
  <Spacer key="spacer" />,
  <Container key="ok">
    <LabelSelect name="lol" key="filter" onChange={onLabelFilter} value={labels} />
    <Button onClick={block(newCard)} key="button">
      Add
    </Button>
  </Container>,
];

export default ActionButton;
