import * as React from 'react';
import { Moment } from 'moment';
import EditableCard from '../EditableCard';
import { OnSave } from '../CardEditing';
import { CardWithId } from '../../features/types';
import { isWithinFilters } from '../../lib/date';
import { Root, Date, Day } from './styles';
import ActionStrip from '../ActionStrip';

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

        {day.cards.map(card => (
          <EditableCard
            onSave={saveCard}
            key={card.id}
            onDelete={removeCard}
            {...card}
          />
        ))}

        <ActionStrip start={day.date} newCard={newCard} />
      </Day>
    ))}
  </Root>
);

export default Timeline;
