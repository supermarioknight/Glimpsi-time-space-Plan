import { injectGlobal } from 'styled-components';
import { kebabCase, mapValues } from 'lodash-es';
import { rgba, lighten, darken } from 'polished';

const APP_PREFIX = 'g';

const raw = {
  white: '#fff',
  red: '#e74c3c',
  whitesmoke: '#ecf0f1',
  green: '#2ecc71',
  orange: '#e67e22',
  black: '#2c3e50',
  blue: '#3498db',
  bluealt: '#2980b9',
  gray: '#95a5a6',
  yellow: '#f1c40f',
};

const _colors = {
  primary: raw.blue,
  background: raw.whitesmoke,
  positive: raw.green,
  warning: raw.orange,
  negative: raw.red,

  cardFocused: rgba(raw.black, 0.25),
  cardBackground: raw.white,
  cardActionsBackground: rgba(raw.black, 0.75),

  textLight: raw.white,
  textDark: raw.black,

  marker: raw.red,

  modalOverlay: rgba(raw.black, 0.88),
  modalBackground: raw.white,

  labelText: raw.white,
  label: raw.yellow,
  labelFun: raw.red,
  labelAccom: raw.blue,
  labelTravel: raw.green,

  focusRing: raw.blue,

  button: raw.green,
  buttonText: raw.white,
  buttonClick: darken(0.1)(raw.green),
  buttonHover: lighten(0.1)(raw.green),

  buttonSecondary: raw.blue,
  buttonSecondaryText: raw.white,
  buttonSecondaryClick: darken(0.1)(raw.blue),
  buttonSecondaryHover: lighten(0.1)(raw.blue),

  buttonTransparent: 'transparent',
  buttonTransparentText: raw.black,
  buttonTransparentClick: lighten(0.2)(raw.gray),
  buttonTransparentHover: lighten(0.3)(raw.gray),
};

const colors = mapValues(_colors, (_, key) => `var(--${APP_PREFIX}-${kebabCase(key)})`);
export const keys = mapValues(_colors, (_, key) => `--${APP_PREFIX}-${kebabCase(key)}`);

export default colors;

// tslint:disable-next-line no-unused-expression
injectGlobal`
  :root {
    ${Object.entries(_colors)
      .map(([key, value]) => `--${APP_PREFIX}-${kebabCase(key)}: ${value};`)
      .join('')}
  }
`;
