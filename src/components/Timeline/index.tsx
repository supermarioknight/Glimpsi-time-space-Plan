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
  days: CardDay[];
  saveCard: OnSave;
  // tslint:disable-next-line no-any
  removeCard: (id: string) => any;
  filters: Moment[];
  // tslint:disable-next-line no-any
  onFilterChange: (filters: Moment[]) => any;
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
  onFilterChange,
  cardScrolledIntoView,
}) => {
  let markerId = 0;

  return (
    <Root>
      {days.map(day => {
        const withinFilters = isWithinFilters(day.date, filters);

        return (
          <Day withinFilters={withinFilters} key={day.date.toString()}>
            <Date
              title="Focus on day"
              onClick={() => onFilterChange([day.date, day.date])}
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
