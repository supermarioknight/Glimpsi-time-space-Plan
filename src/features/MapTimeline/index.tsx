import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import MapTimeline from '../../components/MapTimeline';
import { CardDay } from '../../components/Timeline';
import moment from 'moment';
import { addTimeToDate } from '../../lib/date';
import {
  saveCard,
  newCard,
  removeCard,
  cancelNewCard,
  filterTimeline,
} from './actions';
import { Store, CardWithId } from '../types';

const cardsToDays = (cards: CardWithId[]): CardDay[] => {
  const sortedCards = cards
    .sort((a, b) => {
      const aDateTime = addTimeToDate(a.start, a.time);
      const bDateTime = addTimeToDate(b.start, b.time);
      return (
        Date.parse(aDateTime.toString()) - Date.parse(bDateTime.toString())
      );
    })
    .reduce((days: CardDay[], card) => {
      const latestDay = days[days.length - 1];
      const date = moment(card.start.format('YYYY-MM-DD'));

      if (latestDay && latestDay.date.isSame(date, 'day')) {
        latestDay.cards.push(card);
      } else {
        days.push({
          date,
          cards: [card],
        });
      }

      return days;
    }, []);

  return sortedCards;
};

const selector = createSelector(
  (store: Store) => store.timeline.cards,
  (store: Store) => store.timeline.adding,
  (store: Store) => store.timeline.start,
  (store: Store) => store.timeline.end,
  (store: Store) => store.timeline.filters,
  (cards, adding, start, end, filters) => ({
    adding,
    start,
    end,
    filters,
    days: cardsToDays(cards),
  })
);

export default connect(selector, {
  saveCard,
  newCard,
  removeCard,
  cancelNewCard,
  onFilterChange: filterTimeline,
})(MapTimeline);
