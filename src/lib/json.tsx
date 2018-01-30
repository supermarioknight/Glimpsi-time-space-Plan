import moment, { Moment } from 'moment-timezone';

const dateRegex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.{0,1}\d*))(?:Z|(\+|-)([\d|:]*))?$/;

export default function parseJSON(json: string) {
  const data = JSON.parse(json, (_, value) => {
    if (typeof value === 'string' && dateRegex.exec(value)) {
      return moment(value);
    }

    return value;
  });

  return data;
}

export function stringifyJSON(object: Object) {
  const data = JSON.stringify(object, (_, value) => {
    if (moment.isMoment(value)) {
      return (value as Moment).toISOString();
    }

    return value;
  });

  return data;
}
