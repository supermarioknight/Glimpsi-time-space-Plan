import { configure } from '@storybook/react';

const req = require.context('../src', true, /_stories\.ts$/);

configure(() => req.keys().forEach(req), module);
