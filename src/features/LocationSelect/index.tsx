import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import Select from '../../components/Select';
import { locationsSearch } from './actions';
import { Store } from '../types';

const selector = createSelector(
  (store: Store) => store.locations.searches,
  (store: Store) => store.locations.loading,
  (values, loading) => ({ values, loading })
);

export default connect(selector, {
  onInputChange: locationsSearch,
})(Select);
