import React from 'react';
import AsyncSelect from '../Select/Async';
import { geocode } from '../../lib/maps';

interface Geocode {
  formattedAddress: string;
  position: {
    lat: number;
    lng: number;
  };
}

export type OnChange = (geocode: Geocode) => void;

interface Props {
  onChange: OnChange;
  value?: Geocode;
}

interface ReactSelectOnChange {
  formattedAddress: string;
  position: string;
}

function loadGeocodeOptions(term: string) {
  if (!term) {
    return Promise.resolve({
      options: [],
    });
  }

  return geocode(term).then(results => ({
    options: results
      .map(result => ({
        formattedAddress: result.formatted_address,
        position: JSON.stringify(result.geometry.location),
      }))
      .concat([]),
  }));
}

const handle = (callback: OnChange) => (option: ReactSelectOnChange) => {
  if (!option) {
    callback(option);
    return;
  }

  callback({
    formattedAddress: option.formattedAddress,
    position: JSON.parse(option.position),
  });
};

export default (props: Props) => (
  <AsyncSelect
    onChange={handle(props.onChange)}
    value={
      props.value && {
        ...props.value,
        position: JSON.stringify(props.value.position),
      }
    }
    // This is needed because react select is terrible.
    filterOptions={(options: ReactSelectOnChange[]) => options}
    labelKey="formattedAddress"
    valueKey="position"
    loadOptions={loadGeocodeOptions}
    autoload={false}
    placeholder="Find your location"
  />
);
