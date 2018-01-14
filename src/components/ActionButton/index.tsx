import * as React from 'react';
import styled from 'styled-components';
import LabelSelect from '../LabelSelect';
import * as zIndex from '../../assets/styles/zIndex';

const WIDTH = '66px';
const SPACER = '30px';

const Container = styled.div`
  position: absolute;
  bottom: ${SPACER};
  right: ${SPACER};
  z-index: ${zIndex.actionButtons};
`;

const Button = styled.button`
  width: ${WIDTH};
  height: ${WIDTH};
  border-radius: 50%;
  cursor: pointer;
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
const ActionButton: React.StatelessComponent<Props> = ({ newCard, onLabelFilter, labels }): any => (
  <Container>
    <LabelSelect name="label-filter" onChange={onLabelFilter} value={labels} />
    <Button onClick={block(newCard)}>Add</Button>
  </Container>
);

export default ActionButton;
