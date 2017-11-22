import React from 'react';
import { Async } from 'react-select';
import { root } from './styles';
import styled from 'styled-components';
import { geocode } from '../../lib/maps';

const AsyncSelect = styled(Async)`${root};`;

interface Geocode {
  formattedAddress: string;
  position: {
    lat: number;
    long: number;
  };
}

export type OnChange = (geocode: Geocode) => void;

interface Props {
  onChange: OnChange;
  value?: ReactSelectOnChange;
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
    options: results.map(result => ({
      formattedAddress: result.formatted_address,
      position: JSON.stringify(result.geometry.location),
    })),
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
    labelKey="formattedAddress"
    valueKey="position"
    loadOptions={loadGeocodeOptions}
    autoload={false}
  />
);
