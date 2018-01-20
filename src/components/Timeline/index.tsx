import * as React from 'react';
import { Moment } from 'moment';
import EditableCard from '../EditableCard';
import { OnSave } from '../CardEditing';
import { CardWithId } from '../../features/types';
import { isWithinFilters } from '../../lib/date';
import { Root, Day } from './styles';
import DayActions from '../DayActions';
import ScrollIntoView from '../ScrollIntoView';
import Button from '../Button';

export interface CardDay {
  cards: CardWithId[];
  date: Moment;
}

export interface Props {
  className?: string;
  days: CardDay[];
  saveCard: OnSave;
  // tslint:disable-next-line no-any
  removeCard: (id: string) => any;
  filters: Moment[];
  // tslint:disable-next-line no-any
  focusDate: (date: Moment) => any;
  // tslint:disable-next-line no-any
  newCard: (options?: { start?: Moment }) => any;
  focusedCard?: number | undefined;
  cardScrolledIntoView?: number | undefined;
}

const Timeline: React.StatelessComponent<Props> = ({
  days,
  saveCard,
  removeCard,
  filters,
  newCard,
  focusedCard,
  focusDate,
  cardScrolledIntoView,
  className,
}) => {
  let markerId = 0;

  return (
    <Root className={className}>
      {days.map(day => {
        const withinFilters = isWithinFilters(day.date, filters);

        return (
          <Day fade={!withinFilters} key={day.date.toString()}>
            <Button
              appearance="transparent"
              title={`Focus ${day.date.format('dddd Do MMMM')}`}
              onClick={() => focusDate(day.date)}
              id={day.date.format('DD-MM-YY')}
            >
              {day.date.format('dddd Do MMMM')}
              {day.date.isSame(new Date(), 'day') ? ' today' : undefined}
            </Button>

            {day.cards.map(card => {
              if (withinFilters) {
                markerId += 1;
              }

              return (
                <ScrollIntoView
                  key={card.id}
                  enabled={withinFilters && markerId === cardScrolledIntoView}
                >
                  <EditableCard
                    onSave={saveCard}
                    onDelete={removeCard}
                    markerId={withinFilters ? markerId : undefined}
                    focused={withinFilters && markerId === focusedCard}
                    {...card}
                  />
                </ScrollIntoView>
              );
            })}

            <DayActions start={day.date} newCard={newCard} />
          </Day>
        );
      })}
    </Root>
  );
};

export default Timeline;
