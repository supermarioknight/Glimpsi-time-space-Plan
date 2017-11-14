import { format } from 'date-fns';

export const humanize = (date: string): string => format(date, 'ddd Do MMM YY H:mma');
