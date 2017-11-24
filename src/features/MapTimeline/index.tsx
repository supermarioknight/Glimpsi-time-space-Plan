import { connect } from 'react-redux';
import moment, { Moment } from 'moment';
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
      moment(start).isAfter(filters[0]) && moment(start).isBefore(filters[1])
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
