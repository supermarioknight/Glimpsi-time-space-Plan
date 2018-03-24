import axios from 'axios';

const BASE_URL = 'https://maps.googleapis.com/maps/api';
const API_KEY = 'AIzaSyCPzuh01lRbkjN7zizbWK0t_xNVjF_oYGk';

interface AddressComponent {
  long_name: string;
  short_name: string;
  types: string[];
}

export interface Location {
  formatted_address: string;
  address_components: AddressComponent[];
  geometry: {
    location: {
      timezone: string;
      lat: number;
      lng: number;
    };
  };
}

interface Response<T> {
  results: T[];
  status: string;
}

export function geocode(address: string) {
  return axios
    .get<Response<Location>>(`${BASE_URL}/geocode/json`, {
      params: {
        address,
        key: API_KEY,
      },
    })
    .then(response => response.data.results);
}

interface TimezoneResult {
  dstOffset: number;
  rawOffset: number;
  timeZoneId: string;
  timeZoneName: string;
  status: string;
}

export function timezone(lat: number, lng: number, timestamp: number) {
  return axios
    .get<TimezoneResult>(`${BASE_URL}/timezone/json`, {
      params: {
        timestamp,
        location: `${lat},${lng}`,
        key: API_KEY,
      },
    })
    .then(response => response.data);
}
