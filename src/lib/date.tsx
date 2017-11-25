import { Moment } from 'moment';

export const humanize = (date: Moment, time: Moment): string =>
  `${date.format('ddd Do MMM, YYYY')} ${time.format('HH:mma')}`;
