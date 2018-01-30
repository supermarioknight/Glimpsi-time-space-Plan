import moment from 'moment-timezone';

export default [
  {
    id: '1',
    start: moment(),
    duration: 400,
    title: 'Fly to Japan',
    labels: ['travel'],
    notes: '',
    location: {
      formattedAddress: 'Sydney Airport (SYD)',
      position: { lat: -33.9399228, lng: 151.1752764 },
    },
  },
  {
    id: '2',
    start: moment().add(1, 'day'),
    duration: 30,
    title: 'Reach Japan',
    labels: ['travel'],
    notes: '',
    location: {
      formattedAddress: 'Haneda Airport',
      position: { lat: 35.5493932, lng: 139.7798386 },
    },
  },
  {
    id: '3',
    start: moment().add(2, 'day'),
    duration: 240,

    title: 'Grand Sumo Tournament',
    labels: ['fun'],
    notes: '',
    location: {
      formattedAddress: 'Ryōgoku Kokugikan',
      position: { lat: 35.696944, lng: 139.793333 },
    },
  },
  {
    id: '4',
    start: moment().add(3, 'day'),
    duration: 60,
    title: 'Hackers Bar',
    labels: ['fun'],
    notes: '',
    location: {
      formattedAddress: '7 Chome-12-3 Roppongi Minato-ku, Tōkyō-to 106-0032',
      position: { lat: 35.664375, lng: 139.730543 },
    },
  },
];
