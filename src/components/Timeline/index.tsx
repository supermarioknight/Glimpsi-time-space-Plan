import * as React from 'react';
import { Moment } from 'moment-timezone';
import EditableCard from '../EditableCard';
import { OnSave } from '../CardEditing';
import { CardWithId } from '../../state/timeline/reducer';
import { isWithinFilters } from '../../lib/date';
import { Root, Day } from './styles';
import DayActions from '../DayActions';
import ScrollIntoView from '../ScrollIntoView';
import Button from '../Button';
import withNotifier, { InjectedProps } from '../../decorators/notifier';

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
  // tslint:disable-next-line no-any
  editCard: (id: string) => any;
  filters: Moment[];
  // tslint:disable-next-line no-any
  focusDate: (date: Moment) => any;
  // tslint:disable-next-line no-any
  newCard: (options?: { start?: Moment }) => any;
  focusedCard: number | undefined;
  highlightedCard: number | undefined;
  // tslint:disable-next-line no-any
  undoDelete: () => any;
}

const Timeline: React.StatelessComponent<Props & InjectedProps> = ({
  days,
  saveCard,
  removeCard,
  filters,
  newCard,
  focusedCard,
  focusDate,
  editCard,
  highlightedCard,
  className,
  notify,
  undoDelete,
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
              {day.date.isSame(new Date(), 'day') ? ' [TODAY]' : undefined}
            </Button>

            {day.cards.map(card => {
              if (withinFilters) {
                markerId += 1;
              }

              return (
                <ScrollIntoView key={card.id} enabled={withinFilters && markerId === focusedCard}>
                  <EditableCard
                    onSave={saveCard}
                    onDelete={(id: string) => {
                      removeCard(id);

                      const clearDeleteNotification = notify(
                        <React.Fragment>
                          Deleted.
                          <Button
                            onClick={() => {
                              undoDelete();
                              clearDeleteNotification();
                            }}
                          >
                            undo
                          </Button>
                        </React.Fragment>,
                        { type: 'default' }
                      );
                    }}
                    onEditing={editCard}
                    markerId={withinFilters ? markerId : undefined}
                    elevated={withinFilters && markerId === highlightedCard}
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

export default withNotifier(Timeline);
