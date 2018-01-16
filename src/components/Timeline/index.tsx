import * as React from 'react';
import { Moment } from 'moment';
import EditableCard from '../EditableCard';
import { OnSave } from '../CardEditing';
import { CardWithId } from '../../features/types';
import { isWithinFilters } from '../../lib/date';
import { Root, Date, Day } from './styles';
import ActionStrip from '../ActionStrip';
import ScrollIntoView from '../ScrollIntoView';

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
            <Date
              title={`Focus ${day.date.format('dddd Do MMMM')}`}
              onClick={() => focusDate(day.date)}
              id={day.date.format('DD-MM-YY')}
            >
              {day.date.format('dddd Do MMMM')}
            </Date>

            {day.cards.map(card => {
              if (withinFilters) {
                markerId += 1;
              }

              return (
                <ScrollIntoView
                  key={card.id}
                  disabled={
                    // This is focusing when it shouldn't. Fix it.
                    !(
                      withinFilters &&
                      ((markerId === 1 && cardScrolledIntoView === undefined) ||
                        markerId === cardScrolledIntoView)
                    )
                  }
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

            <ActionStrip start={day.date} newCard={newCard} />
          </Day>
        );
      })}
    </Root>
  );
};

export default Timeline;
