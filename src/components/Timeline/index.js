// @flow

import React from 'react';
import styled from 'styled-components';
import EditableCard from '../Card/Editable';
import { humanize } from '../../lib/date';

type Props = {
  start: string,
  end: string,
  onCardInteraction: ({ id: number }) => {},
  items: Array<{
    id: number,
    start: string,
    end?: string,
    location: string,
    image?: string,
  }>,
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

const Timeline = ({ start, end, items, onCardInteraction }: Props) => {
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
        {items.map((item) => <EditableCard key={item.id} {...item} />)}
      </DateGroup>,
    ]);

  return (
    <Items>
      {humanize(start)}
      {dateGroups}
      {humanize(end)}
    </Items>
  );
};

export default Timeline;
