import axios from 'axios';

const BASE_URL = 'https://maps.googleapis.com/maps/api/geocode/json';
const API_KEY = 'AIzaSyCPzuh01lRbkjN7zizbWK0t_xNVjF_oYGk';

export interface Location {
  formatted_address: string;
  geometry: {
    location: {
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
    .get<Response<Location>>(BASE_URL, {
      params: {
        address,
        key: API_KEY,
      },
    })
    .then(response => response.data.results);
}
