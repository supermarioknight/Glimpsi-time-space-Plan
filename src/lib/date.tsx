import moment from 'moment';
import { Moment } from 'moment-timezone';

export const humanize = (date: Moment, time: Moment): string =>
  `${date.format('ddd Do MMM, YYYY')} ${time.format('HH:mma')}`;

export const isWithin = (
  date: Moment,
  dates: [Moment, Moment],
  { ignoreTimezones = false } = {}
) => {
  const dateCompare = ignoreTimezones ? stripTz(date) : date;

  return dateCompare.isSameOrAfter(dates[0], 'day') && dateCompare.isSameOrBefore(dates[1], 'day');
};

export const setTime = (date: Moment, time: Moment) => {
  const dateTime = date.clone();
  dateTime.set('hour', time.hour());
  dateTime.set('minute', time.minute());
  dateTime.set('seconds', time.seconds());

  return dateTime;
};

export const stripTz = (date: Moment) => {
  const datestring = date.format('YYYY-MM-DD');
  return moment(`${datestring}T00:00:00+00:00`)
    .set('minutes', 0)
    .set('hours', 0);
};
