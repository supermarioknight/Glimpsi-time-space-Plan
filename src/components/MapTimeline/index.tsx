import * as React from 'react';
import styled from 'styled-components';
import { Moment } from 'moment';
import Timeline, {
  Props as TimelineProps,
  CardDay,
} from '../../components/Timeline';
import ActionButton from '../ActionButton';
import NewCard from '../CardNew';
import Map from '../Map';
import { MarkerObj } from '../Map/GoogleMaps';
import Slider from '../Slider';
import Modal from '../Modal';
import { isWithinFilters } from '../../lib/date';

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

const MapContainer = styled.div`
  height: calc(100% - ${SLIDER_HEIGHT});
`;

const LeftColumn = styled.div`
  width: 100%;
`;

interface Props extends TimelineProps {
  adding: boolean;
  // tslint:disable-next-line no-any
  newCard: () => any;
  // tslint:disable-next-line no-any
  cancelNewCard: () => any;
  // tslint:disable-next-line no-any
  onFilterChange: (filters: Moment[]) => any;
  start: Moment;
  end: Moment;
}

const extractMarkers = (days: CardDay[], filters: Moment[]) => {
  return days.reduce((markers: MarkerObj[], day: CardDay) => {
    const locations = day.cards
      .filter(card => isWithinFilters(card.start, filters))
      .map(card => ({
        position: card.location.position,
      }));

    return markers.concat(locations);
  }, []);
};

const MapTimeline: React.StatelessComponent<Props> = ({
  newCard,
  cancelNewCard,
  adding,
  onFilterChange,
  start,
  end,
  ...props,
}) => (
  <Root>
    <LeftColumn>
      <Slider
        onChange={onFilterChange}
        type="days"
        start={start}
        end={end}
        values={props.filters}
      />

      <MapContainer>
        <Map markers={extractMarkers(props.days, props.filters)} autofit />
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
