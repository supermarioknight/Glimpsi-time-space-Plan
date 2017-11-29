import * as React from 'react';
import { Moment } from 'moment';
import styled from 'styled-components';
import EditableCard from '../EditableCard';
import { OnSave } from '../CardEditing';
import { CardWithId } from '../../features/types';

export interface CardDay {
  cards: CardWithId[];
  date: Moment;
}

export interface Props {
  days: CardDay[];
  saveCard: OnSave;
  // tslint:disable-next-line no-any
  removeCard: (id: number) => any;
}

const Root = styled.div`
  width: 400px;
  padding-left: 6px;
`;

const Timeline: React.StatelessComponent<Props> = ({
  days,
  saveCard,
  removeCard,
}) => {
  return (
    <Root>
      {days.map(day =>
        day.cards.map(card => (
          <EditableCard
            onSave={saveCard}
            key={card.id}
            onDelete={removeCard}
            {...card}
          />
        ))
      )}
    </Root>
  );
};

export default Timeline;
