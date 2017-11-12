import * as React from 'react';
import styled from 'styled-components';
import EditableCard from '../EditableCard';
import { humanize } from '../../lib/date';
import EditableText, { RenderTextProps } from '../EditableText';
import { CardWithId } from '../../features/types';

export interface Props {
  start: string;
  end: string;
  items: CardWithId[];
  saveCard: (item: CardWithId) => void;
  removeCard: (id: number) => void;
  updateTimeline: (data: { [key: string]: string }) => void;
}

const Items = styled.div`
  display: flex;
  white-space: nowrap;
  align-items: center;
`;

const DateGroup = styled.div`
  margin: 0 100px;
  display: flex;
`;

const renderText = ({ children, ...props }: RenderTextProps) => <div {...props}>{humanize(children)}</div>;

// Stateless components can't return arrays properly yet.
// See: https://github.com/DefinitelyTyped/DefinitelyTyped/pull/19363
// const Timeline: React.StatelessComponent<Props> = ...
// tslint:disable-next-line no-any
const Timeline: any = ({ start, end, items, saveCard, removeCard, updateTimeline }: Props) => {
  const orderedItems = items
    .sort((a, b) => Date.parse(a.start) - Date.parse(b.start))
    .reduce((obj, item) => {
      const key = new Date(item.start).toDateString();
      obj[key] = obj[key] || [];
      obj[key].push(item);
      return obj;
    }, {});

  const dateGroups = Object.entries(orderedItems)
    .map(([date, groupedItems]: [string, CardWithId[]]) => [
      date,
      <DateGroup key={date}>
        {groupedItems.map((item) => (
          <EditableCard
            onSave={saveCard}
            onDelete={removeCard}
            key={item.id}
            {...item}
          />
        ))}
      </DateGroup>,
    ]);

  return [
    <Items key="items">
      <EditableText
        label="Start"
        defaultValue={start}
        onSave={(value) => updateTimeline({ start: value })}
        renderText={renderText}
      />

      {dateGroups}

      <EditableText
        label="End"
        defaultValue={end}
        onSave={(value) => updateTimeline({ end: value })}
        renderText={renderText}
      />
    </Items>,
  ];
};

Timeline.defaultProps = {
  start: 'Select Start',
  end: 'Select End',
};

export default Timeline;
