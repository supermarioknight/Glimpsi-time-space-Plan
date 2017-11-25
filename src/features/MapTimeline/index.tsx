import { connect } from 'react-redux';
import { Moment } from 'moment';
import { createSelector } from 'reselect';
import MapTimeline from '../../components/MapTimeline';
import {
  saveCard,
  newCard,
  removeCard,
  cancelNewCard,
  filterTimeline,
} from './actions';
import { Store, Card } from '../types';

const filterCards = (items: Card[], filters: Moment[]) => {
  return items.filter(({ start }) => {
    return (
      start.isSameOrAfter(filters[0], 'day') &&
      start.isSameOrBefore(filters[1], 'day')
    );
  });
};

const selector = createSelector(
  (store: Store) => store.timeline.cards,
  (store: Store) => store.timeline.adding,
  (store: Store) => store.timeline.start,
  (store: Store) => store.timeline.end,
  (store: Store) => store.timeline.filters,
  (items, adding, start, end, filters) => ({
    adding,
    start,
    end,
    filters,
    items: filterCards(items, filters),
  })
);

export default connect(selector, {
  saveCard,
  newCard,
  removeCard,
  cancelNewCard,
  onFilterChange: filterTimeline,
})(MapTimeline);
