import moment from 'moment-timezone';

// Override moments default behaviour so we can save timezone data.
moment.fn.toJSON = function() {
  return this.format();
};

const dateRegex = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.{0,1}\d*))(?:Z|(\+|-)([\d|:]*))?$/;

export function parse(json: string) {
  const data = JSON.parse(json, (_, value) => {
    if (typeof value === 'string' && dateRegex.exec(value)) {
      console.log(value);
      return moment(value);
    }

    return value;
  });

  return data;
}

// tslint:disable-next-line ban-types
export function stringify(object: Object) {
  const data = JSON.stringify(object);
  return data;
}
