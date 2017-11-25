import { Moment } from 'moment';

export const humanize = (date: Moment, time: Moment): string =>
  `${date.format('dd Do MMM, YYYY')} ${time.format('HH:mma')}`;
