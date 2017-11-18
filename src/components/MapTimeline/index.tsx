import * as React from 'react';
import styled from 'styled-components';
import Timeline, { Props as TimelineProps } from '../../components/Timeline';
import ActionButton from '../ActionButton';
import CardEditing from '../CardEditing';
import Map from '../Map';

const Root = styled.article`
  display: flex;
  height: 100%;
`;
const TimelineContainer = styled.div`
  overflow-y: auto;
  flex-shrink: 0;
`;

const MapContainer = styled(Map)`
  width: 100%:
`;

interface Props extends TimelineProps {
  adding: boolean;
  // tslint:disable-next-line no-any
  newCard: () => any;
  // tslint:disable-next-line no-any
  cancelNewCard: () => any;
  // tslint:disable-next-line no-any
  updateTimeline: (data: { [key: string]: string }) => any;
  start: string;
  end: string;
}

// Can't return arrays from stateless components yet.
// See: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20356#issuecomment-336384210
const MapTimeline: React.StatelessComponent<Props> = ({
  newCard,
  cancelNewCard,
  adding,
  ...props,
  // tslint:disable-next-line no-any
}): any => (
  <Root>
    <MapContainer />

    <TimelineContainer>
      <Timeline {...props} />
      {adding ? null : <ActionButton newCard={newCard} />}
      {adding ? <CardEditing onSave={props.saveCard} onCancel={cancelNewCard} /> : null}
    </TimelineContainer>
  </Root>
);

export default MapTimeline;
