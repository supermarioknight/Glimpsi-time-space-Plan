import * as React from 'react';
import { Moment } from 'moment';
import Timeline, {
  Props as TimelineProps,
  CardDay,
} from '../../components/Timeline';
import NewCard from '../CardNew';
import Map from '../Map';
import { MarkerObj } from '../Map/GoogleMaps';
import Slider from '../Slider';
import Modal from '../Modal';
import { isWithinFilters } from '../../lib/date';
import ActionButton from '../ActionButton';
import { Root, RightColumn, LeftColumn, MapContainer } from './styles';

interface Props extends TimelineProps {
  adding: { start?: Moment } | null;
  // tslint:disable-next-line no-any
  newCard: (options?: { start?: Moment }) => any;
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

const extractLatestDate = (days: CardDay[]) => {
  const lastDay = days[days.length - 1];
  if (!lastDay) {
    return undefined;
  }

  const lastCard = lastDay.cards[lastDay.cards.length - 1];
  return lastCard && lastDay.date;
};

const MapTimeline: React.StatelessComponent<Props> = ({
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
      {!adding && <ActionButton newCard={props.newCard} />}
      {adding && (
        <Modal>
          <NewCard
            start={adding.start}
            datePickerFrom={extractLatestDate(props.days)}
            onSave={props.saveCard}
            onCancel={cancelNewCard}
          />
        </Modal>
      )}
    </RightColumn>
  </Root>
);

export default MapTimeline;
