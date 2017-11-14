import * as React from 'react';
import styled from 'styled-components';
import { differenceInMinutes } from 'date-fns';

const Root = styled.div`display: inline-block;`;

interface StripProps {
  widthModifier: number;
}

const Strip = styled.div`
  position: relative;
  height: 6px;
  border-radius: 2px;
  background: ${(props: StripProps) => (props.widthModifier === 1 ? 'black' : 'red')};
  width: ${(props: StripProps) => `${100 * props.widthModifier}%`};
  z-index: ${(props: StripProps) => (props.widthModifier === 1 ? '1' : '2')};
`;

interface TimePeriod {
  date: string;
  duration: number;
}

interface Props {
  current: TimePeriod;
  next?: TimePeriod;
  children: React.ReactNode;
}

const TimeStrip = ({ current, next, children }: Props) => {
  let modifier = 1;

  if (next) {
    const currentDate = new Date(current.date);
    const nextDate = new Date(next.date);

    if (process.env.NODE_ENV !== 'production' && nextDate && nextDate < currentDate) {
      throw new Error('Next date must be after current date');
    }

    const difference = differenceInMinutes(nextDate, currentDate);
    const overlap = current.duration - difference;

    if (overlap > 0) {
      modifier += overlap / next.duration;
    }
  }

  return (
    <Root>
      <Strip widthModifier={modifier} />
      {children}
    </Root>
  );
};

export default TimeStrip;
