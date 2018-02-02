import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import MapTimeline from '../.';
import { CardDay } from '../../Timeline';
import moment, { Moment } from 'moment-timezone';
import {
  saveCard,
  newCard,
  removeCard,
  cancelNewCard,
  filterTimeline,
  updateCard,
  undoDelete,
  resetFocusCard,
} from '../../../state/timeline/actions';
import { CardWithId } from '../../../state/timeline/reducer';
import { Store } from '../../../state/rootReducer';

const cardsToDays = (cards: CardWithId[], labels: string[]): CardDay[] => {
  const sortedCards = cards
    .sort((a, b) => {
      return Date.parse(a.start.toString()) - Date.parse(b.start.toString());
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
  (store: Store) => store.timeline.lastSavedCardId,
  (store: Store) => store.timeline.lastRemovedCard,
  (cards, adding, start, end, filters, labels, lastSavedCardId, lastRemovedCard) => ({
    adding,
    start,
    end,
    filters,
    lastSavedCardId,
    lastRemovedCard,
    days: cardsToDays(cards, labels),
  })
);

export default connect(selector, {
  saveCard,
  newCard,
  removeCard,
  cancelNewCard,
  undoDelete,
  resetFocusCard,
  editCard: updateCard,
  onFilterChange: filterTimeline,
  focusDate: (date: Moment) =>
    filterTimeline([moment(date).set('hours', 0), moment(date).set('hours', 23)]),
})(MapTimeline);
