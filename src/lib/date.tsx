import { format } from 'date-fns';

export const humanize = (date: string, time: string): string =>
  format(`${date.split('T')[0]}T${time}`, 'ddd Do MMM, YYYY HH:mma');
