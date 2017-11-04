import { configure } from '@storybook/react';

const req = require.context('../src', true, /_stories\.js$/);

configure(() => req.keys().forEach(req), module);
