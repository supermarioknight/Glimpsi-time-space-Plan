import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import MapTimeline from '../../components/MapTimeline';
import { CardDay } from '../../components/Timeline';
import moment, { Moment } from 'moment';
import { addTimeToDate } from '../../lib/date';
import {
  saveCard,
  newCard,
  removeCard,
  cancelNewCard,
  filterTimeline,
  filterLabels,
} from './actions';
import { Store, CardWithId } from '../types';

const cardsToDays = (cards: CardWithId[], labels: string[]): CardDay[] => {
  const sortedCards = cards
    .sort((a, b) => {
      const aDateTime = addTimeToDate(a.start, a.time);
      const bDateTime = addTimeToDate(b.start, b.time);
      return Date.parse(aDateTime.toString()) - Date.parse(bDateTime.toString());
    })
    .reduce((days: CardDay[], card) => {
      const latestDay = days[days.length - 1];
      const date = moment(card.start.format('YYYY-MM-DD'));
      const hasLabel =
        !labels.length ||
        labels.find(label => {
          return card.labels.includes(label);
        });

      if (!hasLabel) {
        return days;
      }

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
  (store: Store) => store.timeline.labels,
  (cards, adding, start, end, filters, labels) => ({
    adding,
    start,
    end,
    filters,
    labels,
    days: cardsToDays(cards, labels),
  })
);

export default connect(selector, {
  saveCard,
  newCard,
  removeCard,
  cancelNewCard,
  filterLabels,
  onFilterChange: filterTimeline,
  focusDate: (date: Moment) =>
    filterTimeline([moment(date).set('hours', 0), moment(date).set('hours', 23)]),
})(MapTimeline);
