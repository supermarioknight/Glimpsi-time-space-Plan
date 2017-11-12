import { configure } from '@storybook/react';

const req = require.context('../src', true, /_stories\.tsx$/);

configure(() => req.keys().forEach(req), module);
