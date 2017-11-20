import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import Select from '../../components/Select';
import { locationsSearch } from './actions';
import { Store } from '../types';

const selector = createSelector(
  (store: Store) => store.locations.terms.macquarie && store.locations.terms.macquarie.options,
  (store: Store) => store.locations.loading,
  (options, loading) => ({ options, loading })
);

export default connect(selector, {
  onInputChange: locationsSearch,
})(Select);
