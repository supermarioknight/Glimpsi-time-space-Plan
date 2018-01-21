import * as React from 'react';
import { Moment } from 'moment';
import { Props as TimelineProps, CardDay } from '../../components/Timeline';
import NewCard from '../CardNew/Connected';
import Map from '../Map';
import { MarkerObj } from '../Map/GoogleMaps';
import Modal from '../Modal';
import { isWithinFilters } from '../../lib/date';
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
  onFilterChange: (dates: Moment[]) => any;
}

const extractMarkers = (days: CardDay[], filters: Moment[]) => {
  return days.reduce((markers: MarkerObj[], day: CardDay) => {
    const locations = day.cards.filter(card => isWithinFilters(card.start, filters)).map(card => ({
      position: card.location.position,
    }));

    return markers.concat(locations);
  }, []);
};

// const extractLatestDate = (days: CardDay[]) => {
//   const lastDay = days[days.length - 1];
//   if (!lastDay) {
//     return undefined;
//   }

//   const lastCard = lastDay.cards[lastDay.cards.length - 1];
//   return lastCard && lastDay.date;
// };

interface State {
  focusedCard: number | undefined;
  cardScrolledIntoView: number | undefined;
}

export default class MapTimeline extends React.Component<Props, State> {
  state: State = {
    focusedCard: undefined,
    // SCROLL INTO VIEW JUMP
    // Set this to 1 initially so on page load it jumps to
    // the card in question.
    cardScrolledIntoView: 1,
  };

  componentDidMount() {
    // SCROLL INTO VIEW JUMP
    // Reset to undefined so it only jumps to the card in
    // question _once_, and then from there requires user
    // interaction.
    this.setCardScrolledIntoView(undefined);
  }

  setFocus = (cardIndex?: number) => {
    this.setState({
      focusedCard: cardIndex,
    });
  };

  setCardScrolledIntoView = (cardIndex?: number) => {
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

        <Timeline {...props} {...this.state} focusDate={focusDate} />

        {adding && (
          <Modal
            onRequestClose={cancelNewCard}
            appRoot={document.getElementById('root') as HTMLElement}
          >
            <NewCard />
          </Modal>
        )}
      </Root>
    );
  }
}
