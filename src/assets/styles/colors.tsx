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

  textLight: raw.white,
  textDark: raw.black,

  marker: raw.blue,
  markerBorder: raw.bluealt,

  modalOverlay: rgba(raw.black, 0.88),
  modalBackground: raw.white,

  labelText: raw.white,
  label: raw.yellow,
  labelFun: raw.red,
  labelAccom: raw.blue,
  labelTravel: raw.green,

  slider: raw.white,
  sliderProgress: raw.blue,
  sliderTooltip: raw.black,

  focusRing: raw.bluealt,

  buttonPositive: raw.green,
  buttonPositiveText: raw.white,
  buttonPositiveClick: darken(0.1)(raw.green),
  buttonPositiveHover: lighten(0.1)(raw.green),

  buttonNegative: raw.red,
  buttonNegativeText: raw.white,
  buttonNegativeClick: darken(0.1)(raw.red),
  buttonNegativeHover: lighten(0.1)(raw.red),

  button: raw.blue,
  buttonText: raw.white,
  buttonClick: darken(0.1)(raw.blue),
  buttonHover: lighten(0.1)(raw.blue),

  buttonTransparent: 'transparent',
  buttonTransparentText: raw.black,
  buttonTransparentClick: rgba(darken(0.1)(raw.white), 0.5),
  buttonTransparentHover: rgba(raw.white, 0.5),

  input: raw.white,
  inputDisabled: raw.whitesmoke,
  inputFocus: rgba(raw.blue, 0.5),
  selectValue: raw.whitesmoke,

  datePicker: raw.white,
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
