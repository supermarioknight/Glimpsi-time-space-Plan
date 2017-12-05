import * as React from 'react';
import { Moment } from 'moment';
import EditableCard from '../EditableCard';
import { OnSave } from '../CardEditing';
import { CardWithId } from '../../features/types';
import { isWithinFilters } from '../../lib/date';
import { Root, Date, Day } from './styles';
import ActionStrip from '../ActionStrip';
import ColorStrip from '../ColorStrip';

export interface CardDay {
  cards: CardWithId[];
  date: Moment;
}

export interface Props {
  days: CardDay[];
  saveCard: OnSave;
  // tslint:disable-next-line no-any
  removeCard: (id: string) => any;
  filters: Moment[];
  // tslint:disable-next-line no-any
  newCard: (options?: { start?: Moment }) => any;
}

const groupOverlappingCards = (cards: CardWithId[]) => {
  const cardGroups = cards.reduce<CardWithId[][]>((groups, currentItem) => {
    const previousGroup = groups[groups.length - 1];
    if (previousGroup) {
      const lastItemInGroup = previousGroup[previousGroup.length - 1];
      const difference = currentItem.start.diff(lastItemInGroup.start);
      const overlap = lastItemInGroup.duration - difference;
      if (overlap > 0) {
        // There is an overlap, add to the group
        previousGroup.push(currentItem);
        return groups;
      }
    }

    // no overlap/no group to compare, push new group
    groups.push([currentItem]);
    return groups;
  }, []);

  return cardGroups;
};

const Timeline: React.StatelessComponent<Props> = ({
  days,
  saveCard,
  removeCard,
  filters,
  newCard,
}) => (
  <Root>
    {days.map(day => (
      <Day withinFilters={isWithinFilters(day.date, filters)}>
        <Date id={day.date.format('DD-MM-YY')}>
          {day.date.format('dddd Do MMMM')}
        </Date>

        {groupOverlappingCards(day.cards).map(cards => {
          const cardElements = cards.map(card => (
            <EditableCard
              onSave={saveCard}
              key={card.id}
              onDelete={removeCard}
              {...card}
            />
          ));

          if (cardElements.length > 1) {
            return (
              <ColorStrip appearance="vertical">{cardElements}</ColorStrip>
            );
          }

          return cardElements;
        })}

        <ActionStrip start={day.date} newCard={newCard} />
      </Day>
    ))}
  </Root>
);

export default Timeline;
