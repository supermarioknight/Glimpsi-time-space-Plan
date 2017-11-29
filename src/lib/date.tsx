import { Moment } from 'moment';

export const humanize = (date: Moment, time: Moment): string =>
  `${date.format('ddd Do MMM, YYYY')} ${time.format('HH:mma')}`;

export const isWithinFilters = (date: Moment, filters: Moment[]) =>
  date.isSameOrAfter(filters[0], 'day') &&
  date.isSameOrBefore(filters[1], 'day');
