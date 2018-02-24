import * as React from 'react';
import { Moment } from 'moment-timezone';
import { Route, Redirect, Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import Helmet from 'react-helmet';
import { withAnalyticsEvents } from '@atlaskit/analytics-next';
import { CardDay } from '../../components/Timeline';
import NewCardModal from '../CardEditing/Async';
import Map from '../Map';
import { sizes } from '../../assets/styles/breakpoints';
import { OnSave } from '../CardEditing';
import { Card } from '../../state/timeline/reducer';
import { MarkerObj } from '../Map/GoogleMaps';
import { isWithin } from '../../lib/date';
import { Root, MapContainer, Slider, Timeline, MobilePage, Blanket } from './styles';
import withRenderNextFrame from '../../decorators/renderNextFrame';
import { withScreen } from '../../decorators/analytics/view';

const TimelineRNF = withRenderNextFrame(Timeline);

export interface Props {
  tripName: string;
  adding: { start?: Moment } | null;
  // tslint:disable-next-line no-any
  newCard: (options?: { start?: Moment }) => any;
  // tslint:disable-next-line no-any
  cancelNewCard: () => any;
  start: Moment;
  end: Moment;
  // tslint:disable-next-line no-any
  onFilterChange: (dates: [Moment, Moment]) => any;
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
  filters: [Moment, Moment];
  // tslint:disable-next-line no-any
  focusDate: (date: Moment) => any;
  // tslint:disable-next-line no-any
  resetFocusCard: () => any;
  // tslint:disable-next-line no-any
  focusCard: (id: number) => any;
}

const extractMarkers = (days: CardDay[], filters: [Moment, Moment]) => {
  return days.reduce((markers: MarkerObj[], day: CardDay) => {
    const locations = day.cards
      .filter(card => isWithin(card.start, filters, { ignoreTimezones: true }))
      .map(card => ({
        position: card.location.position,
      }));

    return markers.concat(locations);
  }, []);
};

interface State {
  highlightedCard: number | undefined;
}

class MapTimeline extends React.Component<Props, State> {
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
      tripName,
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
        <Helmet>
          <title>{tripName}</title>
        </Helmet>

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

        <NewCardModal />
      </Root>
    );
  }
}

export default withScreen<Props>('MapTimeline')(
  withAnalyticsEvents<Props>({
    focusDate: createAnaylticsEvent =>
      createAnaylticsEvent({ action: 'Focus Date', category: 'Timeline' }).fire(),
    newCard: createAnaylticsEvent =>
      createAnaylticsEvent({ action: 'New Card for Specific Date', category: 'Timeline' }).fire(),
    onFilterChange: createAnaylticsEvent =>
      createAnaylticsEvent({ action: 'Filter Timeline', category: 'Timeline' }).fire(),
  })(MapTimeline)
);
