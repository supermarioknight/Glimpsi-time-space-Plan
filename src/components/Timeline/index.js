// @flow

import React from 'react';
import styled from 'styled-components';
import EditableCard from '../EditableCard';
import { humanize } from '../../lib/date';
import EditableText from '../EditableText';

type Item = {
  id: number,
  start: string,
  end?: string,
  location: string,
  image?: string,
};

type Props = {
  start: string,
  end: string,
  items: Array<Item>,
  updateTimeline: ({ [string]: any }) => void,
  deleteCard: ({ id: number }) => void,
  saveCard: (item: Item) => void,
};

const Items = styled.div`
  display: flex;
  white-space: nowrap;
  align-items: center;
`;

const DateGroup = styled.div`
  margin: 0 100px;
  display: flex;
`;

const Timeline = ({ start, end, items, saveCard, deleteCard, updateTimeline }: Props) => {
  const orderedItems = items
    .sort((a, b) => new Date(a.start) - new Date(b.start))
    .reduce((obj, item) => {
      const key = new Date(item.start).toDateString();
      obj[key] = obj[key] || [];
      obj[key].push(item);
      return obj;
    }, {});

  const dateGroups = Object.entries(orderedItems)
    .map(([date, items]) => [
      date,
      <DateGroup key={date}>
        {items.map((item) => (
          <EditableCard
            onSave={saveCard}
            onDelete={deleteCard}
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
        valueDecorator={humanize}
      />

      {dateGroups}

      <EditableText
        label="End"
        defaultValue={end}
        onSave={(value) => updateTimeline({ end: value })}
        valueDecorator={humanize}
      />
    </Items>,
  ];
};

Timeline.defaultProps = {
  start: 'Select Start',
  end: 'Select End',
};

export default Timeline;
