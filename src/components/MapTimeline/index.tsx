import * as React from 'react';
import { Moment } from 'moment-timezone';
import { CardDay } from '../../components/Timeline';
import NewCard from '../CardEditing/Connected';
import Map from '../Map';
import Header from '../Header';
import TimelineActions from '../TimelineActions/Connected';
import { OnSave } from '../CardEditing';
import { Card } from '../../state/timeline/reducer';
import { MarkerObj } from '../Map/GoogleMaps';
import { isWithinFilters } from '../../lib/date';
import { Root, MapContainer, Slider, Timeline } from './styles';

interface Props {
  adding: { start?: Moment } | null;
  // tslint:disable-next-line no-any
  newCard: (options?: { start?: Moment }) => any;
  // tslint:disable-next-line no-any
  cancelNewCard: () => any;
  start: Moment;
  end: Moment;
  // tslint:disable-next-line no-any
  onFilterChange: (dates: Moment[]) => any;
  lastSavedCardId: string | undefined;
  // tslint:disable-next-line no-any
  undoDelete: () => any;
  lastRemovedCard: Card | undefined;
  className?: string;
  days: CardDay[];
  saveCard: OnSave;
  // tslint:disable-next-line no-any
  removeCard: (id: string) => any;
  // tslint:disable-next-line no-any
  editCard: (id: string) => any;
  filters: Moment[];
  // tslint:disable-next-line no-any
  focusDate: (date: Moment) => any;
  // tslint:disable-next-line no-any
  resetFocusCard: () => any;
  // tslint:disable-next-line no-any
  focusCard: (id: number) => any;
}

const extractMarkers = (days: CardDay[], filters: Moment[]) => {
  return days.reduce((markers: MarkerObj[], day: CardDay) => {
    const locations = day.cards.filter(card => isWithinFilters(card.start, filters)).map(card => ({
      position: card.location.position,
    }));

    return markers.concat(locations);
  }, []);
};

interface State {
  highlightedCard: number | undefined;
}

export default class MapTimeline extends React.Component<Props, State> {
  state: State = {
    highlightedCard: undefined,
  };

  componentDidMount() {
    this.props.resetFocusCard();
  }

  setHighlight = (cardIndex?: number) => {
    this.setState({
      highlightedCard: cardIndex,
    });
  };

  render() {
    const {
      cancelNewCard,
      adding,
      onFilterChange,
      focusDate,
      start,
      end,
      lastSavedCardId,
      lastRemovedCard,
      undoDelete,
      ...props
    } = this.props;

    return (
      <React.Fragment>
        <Header appearance="default">
          <TimelineActions />
        </Header>

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
              onMarkerClick={this.props.focusCard}
              onMarkerOver={this.setHighlight}
              onMarkerOut={this.setHighlight}
            />
          </MapContainer>

          <Timeline {...props} {...this.state} focusDate={focusDate} />

          {adding && <NewCard />}
        </Root>
      </React.Fragment>
    );
  }
}
