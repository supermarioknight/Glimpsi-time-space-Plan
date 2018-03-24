import { configure } from '@storybook/react';
import { injectGlobal } from 'styled-components';
import '../packages/glimpsi-app/src/styles';

injectGlobal`
  body { margin: 25px; background-color: #ccc; position: relative; }
`;

const req = require.context('../packages', true, /_stories\.tsx$/);

configure(() => req.keys().forEach(req), module);
