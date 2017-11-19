import * as React from 'react';
import styled from 'styled-components';
import Timeline, { Props as TimelineProps } from '../../components/Timeline';
import ActionButton from '../ActionButton';
import CardEditing from '../CardEditing';
import Map from '../Map';
import Slider from '../Slider';
import Modal from '../Modal';

const SLIDER_HEIGHT = '35px';

const Root = styled.article`
  display: flex;
  flex-grow: 1;
  height: 100%;
`;
const RightColumn = styled.div`
  overflow-y: auto;
  flex-shrink: 0;
`;

const MapContainer = styled.div`height: calc(100% - ${SLIDER_HEIGHT});`;

const LeftColumn = styled.div`width: 100%;`;

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
    <LeftColumn>
      <Slider />

      <MapContainer>
        <Map markers={props.items} />
      </MapContainer>
    </LeftColumn>

    <RightColumn>
      <Timeline {...props} />
      {adding ? null : <ActionButton newCard={newCard} />}
      {adding ? (
        <Modal>
          <CardEditing onSave={props.saveCard} onCancel={cancelNewCard} />
        </Modal>
      ) : null}
    </RightColumn>
  </Root>
);

export default MapTimeline;
