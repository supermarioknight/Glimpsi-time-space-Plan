import * as React from 'react';
import styled from 'styled-components';
// import { differenceInMinutes } from 'date-fns';

const Root = styled.div``;

interface TimePeriod {
  date: string;
  duration: number;
}

interface Props {
  current: TimePeriod;
  next: TimePeriod;
  children: React.ReactNode;
}

const TimeContainer = ({ current, next, children }: Props) => {
  const currentDate = new Date(current.date);
  const nextDate = new Date(next.date);

  if (process.env.NODE_ENV !== 'production' && nextDate < currentDate) {
    throw new Error('Next date must be after current date');
  }

  // const difference = differenceInMinutes(nextDate, currentDate);
  // const overlap = difference > current.duration ? difference - current.duration : 0;

  return <Root>{children}</Root>;
};

export default TimeContainer;
