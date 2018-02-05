import { connect } from 'react-redux';
import { saveTrip } from '../../state/trips/actions';
import TripStart from './';

export default connect(null, {
  onStart: saveTrip,
})(TripStart);
