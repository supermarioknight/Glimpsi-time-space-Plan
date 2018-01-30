import { Moment } from 'moment-timezone';

export const humanize = (date: Moment, time: Moment): string =>
  `${date.format('ddd Do MMM, YYYY')} ${time.format('HH:mma')}`;

export const isWithinFilters = (date: Moment, filters: Moment[]) =>
  date.isSameOrAfter(filters[0], 'day') && date.isSameOrBefore(filters[1], 'day');

export const setTime = (date: Moment, time: Moment) => {
  const dateTime = date.clone();
  dateTime.set('hour', time.hour());
  dateTime.set('minute', time.minute());
  dateTime.set('seconds', time.seconds());

  return dateTime;
};
