import styled from 'styled-components';
import * as transitions from '../../assets/styles/transitions';
import MapTimelineAsync from '../MapTimeline/Connected/Async';
import TripsOverviewAsync from '../TripsOverview/Async';
import TripStartAsync from '../TripStart/Async';
import FadeIn from '../FadeIn';

export const Root = styled(FadeIn)`
  height: 100%;
`;

export const TripsOverview = styled(TripsOverviewAsync)`
  ${transitions.fade(100)};
`;

export const TripStart = styled(TripStartAsync)`
  ${transitions.fade(100)};
`;

export const MapTimeline = styled(MapTimelineAsync)`
  ${transitions.fade(100)};
`;
