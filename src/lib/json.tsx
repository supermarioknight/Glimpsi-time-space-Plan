import moment from 'moment';

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
