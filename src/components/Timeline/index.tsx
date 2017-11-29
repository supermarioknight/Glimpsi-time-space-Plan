import * as React from 'react';
import { Moment } from 'moment';
import styled from 'styled-components';
import EditableCard from '../EditableCard';
import { OnSave } from '../CardEditing';
import { CardWithId } from '../../features/types';
import { isWithinFilters } from '../../lib/date';

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
}

const Root = styled.div`
  width: 400px;
  padding-left: 6px;
`;

interface DayContainerProps {
  withinFilters: boolean;
}

const DayContainer = styled.span`
  display: block;
  opacity: ${(props: DayContainerProps) => (props.withinFilters ? '1' : '0.5')};
`;

const Timeline: React.StatelessComponent<Props> = ({
  days,
  saveCard,
  removeCard,
  filters,
}) => {
  return (
    <Root>
      {days.map(day => (
        <DayContainer
          key={day.date.toString()}
          withinFilters={isWithinFilters(day.date, filters)}
        >
          {day.cards.map(card => (
            <EditableCard
              onSave={saveCard}
              key={card.id}
              onDelete={removeCard}
              {...card}
            />
          ))}
        </DayContainer>
      ))}
    </Root>
  );
};

export default Timeline;
