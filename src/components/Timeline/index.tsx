import * as React from 'react';
import { Moment } from 'moment';
import styled from 'styled-components';
import EditableCard from '../EditableCard';
import { OnSave } from '../CardEditing';
import { CardWithId } from '../../features/types';
import { isWithinFilters } from '../../lib/date';
import bp from '../../assets/styles/breakpoints';

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
  display: flex;
  width: 350px;

  > * {
    flex-shrink: 0;
  }

  ${bp.tablet`
    display: block;
    width: 300px;
  `} ${bp.desktop`
    width: 400px;
    padding-left: 6px;
  `};
`;

interface DayContainerProps {
  withinFilters: boolean;
}

const Card = styled(EditableCard)`
  opacity: ${(props: DayContainerProps) => (props.withinFilters ? '1' : '0.5')};
`;

const Timeline: React.StatelessComponent<Props> = ({
  days,
  saveCard,
  removeCard,
  filters,
}) => (
  <Root>
    {days.map(day =>
      day.cards.map(card => (
        <Card
          withinFilters={isWithinFilters(day.date, filters)}
          onSave={saveCard}
          key={card.id}
          onDelete={removeCard}
          {...card}
        />
      ))
    )}
  </Root>
);

export default Timeline;
