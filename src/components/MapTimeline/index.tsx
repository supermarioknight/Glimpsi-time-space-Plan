import * as React from 'react';
import { Moment } from 'moment';
import { Props as TimelineProps, CardDay } from '../../components/Timeline';
import NewCard from '../CardNew';
import Map from '../Map';
import { MarkerObj } from '../Map/GoogleMaps';
import Modal from '../Modal';
import { isWithinFilters } from '../../lib/date';
import ActionButton from '../ActionButton';
import { Root, MapContainer, Slider, Timeline } from './styles';

interface Props extends TimelineProps {
  adding: { start?: Moment } | null;
  // tslint:disable-next-line no-any
  newCard: (options?: { start?: Moment }) => any;
  // tslint:disable-next-line no-any
  cancelNewCard: () => any;
  start: Moment;
  end: Moment;
  // tslint:disable-next-line no-any
  filterLabels: (labels: string[]) => any;
  // tslint:disable-next-line no-any
  onFilterChange: (dates: Moment[]) => any;
  labels: string[];
}

const extractMarkers = (days: CardDay[], filters: Moment[]) => {
  return days.reduce((markers: MarkerObj[], day: CardDay) => {
    const locations = day.cards.filter(card => isWithinFilters(card.start, filters)).map(card => ({
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

interface State {
  focusedCard: number | undefined;
  cardScrolledIntoView: number | undefined;
}

export default class MapTimeline extends React.Component<Props, State> {
  state: State = {
    focusedCard: undefined,
    cardScrolledIntoView: undefined,
  };

  setFocus = (cardIndex?: number) => {
    this.setState({
      focusedCard: cardIndex,
    });
  };

  setCardScrolledIntoView = (cardIndex: number) => {
    this.setState({
      cardScrolledIntoView: cardIndex,
    });
  };

  render() {
    const { cancelNewCard, adding, onFilterChange, focusDate, start, end, ...props } = this.props;

    return (
      <Root>
        <Slider
          onChange={onFilterChange}
          type="days"
          start={start}
          end={end}
          values={props.filters}
        />

        <MapContainer>
          <Map
            markers={extractMarkers(props.days, props.filters)}
            autofit
            onMarkerClick={this.setCardScrolledIntoView}
            onMarkerOver={this.setFocus}
            onMarkerOut={this.setFocus}
          />
        </MapContainer>

        <ActionButton
          newCard={props.newCard}
          onLabelFilter={props.filterLabels}
          labels={props.labels}
        />

        <Timeline {...props} {...this.state} focusDate={focusDate} />

        {adding && (
          <Modal
            onRequestClose={cancelNewCard}
            appRoot={document.getElementById('root') as HTMLElement}
          >
            <NewCard
              start={adding.start}
              datePickerFrom={adding.start ? undefined : extractLatestDate(props.days)}
              onSave={props.saveCard}
              onCancel={cancelNewCard}
            />
          </Modal>
        )}
      </Root>
    );
  }
}
