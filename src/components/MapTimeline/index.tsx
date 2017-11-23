import * as React from 'react';
import styled from 'styled-components';
import Timeline, { Props as TimelineProps } from '../../components/Timeline';
import ActionButton from '../ActionButton';
import NewCard from '../CardNew';
import Map from '../Map';
// import Slider from '../Slider';
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
  onFilterChange: (data: { start?: number; end?: number }) => any;
  start: number;
  end: number;
}

const MapTimeline: React.StatelessComponent<Props> = ({
  newCard,
  cancelNewCard,
  adding,
  // onFilterChange,
  // start,
  // end,
  ...props,
}) => (
  <Root>
    <LeftColumn>
      {/* <Slider
        onChange={([startFrom, endAt]) =>
          onFilterChange({ start: startFrom, end: endAt })}
        values={[start, end]}
      /> */}

      <MapContainer>
        <Map markers={props.items.map(item => item.location)} autofit />
      </MapContainer>
    </LeftColumn>

    <RightColumn>
      <Timeline {...props} />
      {adding ? null : <ActionButton newCard={newCard} />}
      {adding ? (
        <Modal>
          <NewCard onSave={props.saveCard} onCancel={cancelNewCard} />
        </Modal>
      ) : null}
    </RightColumn>
  </Root>
);

export default MapTimeline;
