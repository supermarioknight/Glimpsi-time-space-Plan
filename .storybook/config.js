import { configure } from '@storybook/react';
import { injectGlobal } from 'styled-components';
import '../src/styles';

injectGlobal`
  body { padding: 25px; }
`;

const req = require.context('../src', true, /_stories\.tsx$/);

configure(() => req.keys().forEach(req), module);
