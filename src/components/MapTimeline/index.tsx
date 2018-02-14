import * as React from 'react';
import { Moment } from 'moment-timezone';
import { Route, Redirect, Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { CardDay } from '../../components/Timeline';
import NewCard from '../CardEditing/Async';
import Map from '../Map';
import { sizes } from '../../assets/styles/breakpoints';
import { OnSave } from '../CardEditing';
import { Card } from '../../state/timeline/reducer';
import { MarkerObj } from '../Map/GoogleMaps';
import { isWithinFilters } from '../../lib/date';
import { Root, MapContainer, Slider, Timeline, MobilePage, Blanket } from './styles';
import withRenderNextFrame from '../../decorators/renderNextFrame';

const TimelineRNF = withRenderNextFrame(Timeline);

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
    this.props.focusCard(1);
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
      className,
      ...props
    } = this.props;

    const slider = (
      <Slider
        onChange={onFilterChange}
        type="days"
        start={start}
        end={end}
        values={props.filters}
      />
    );

    const map = (
      <MapContainer>
        <Map
          markers={extractMarkers(props.days, props.filters)}
          autofit
          onMarkerClick={this.props.focusCard}
          onMarkerOver={this.setHighlight}
          onMarkerOut={this.setHighlight}
        />
      </MapContainer>
    );

    const timeline = <TimelineRNF {...props} {...this.state} focusDate={focusDate} />;

    return (
      <Root className={className}>
        <Route path="/:tripKey">
          {({ match: { params } }) => (
            <MediaQuery minWidth={sizes.tablet} component={React.Fragment}>
              {matches =>
                matches ? (
                  <React.Fragment>
                    {slider}
                    {map}
                    {timeline}

                    <Route
                      path="/:tripKey/:anything"
                      render={() => <Redirect to={`/${params.tripKey}`} />}
                    />
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <Route
                      path="/:tripKey"
                      exact
                      render={() => <Redirect to={`/${params.tripKey}/map`} />}
                    />

                    <Route path="/:tripKey/map">
                      {({ match }) => (
                        <React.Fragment>
                          <MobilePage active={!!match} position="left">
                            {slider}
                            {map}
                          </MobilePage>

                          {!match && (
                            <Link to={`/${params.tripKey}/map`}>
                              <Blanket position="absolute" />
                            </Link>
                          )}
                        </React.Fragment>
                      )}
                    </Route>

                    <Route path="/:tripKey/timeline">
                      {({ match }) => (
                        <React.Fragment>
                          <MobilePage active={!!match} position="right">
                            {timeline}
                          </MobilePage>

                          {!match && (
                            <Link to={`/${params.tripKey}/timeline`}>
                              <Blanket position="absolute" />
                            </Link>
                          )}
                        </React.Fragment>
                      )}
                    </Route>
                  </React.Fragment>
                )
              }
            </MediaQuery>
          )}
        </Route>

        {adding && <NewCard />}
      </Root>
    );
  }
}
