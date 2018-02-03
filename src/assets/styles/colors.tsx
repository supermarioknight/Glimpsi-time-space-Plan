import { injectGlobal } from 'styled-components';
import { kebabCase, mapValues } from 'lodash-es';
import { rgba, lighten, darken } from 'polished';

const APP_PREFIX = 'glmpc';

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

const primary = raw.bluealt;

const _colors = {
  background: raw.whitesmoke,
  positive: raw.green,
  warning: raw.orange,
  negative: raw.red,

  header: primary,

  datePickerBorder: primary,

  cardFocused: rgba(raw.black, 0.25),
  cardBackground: raw.white,

  textLight: raw.white,
  textDark: raw.black,

  marker: primary,
  markerBorder: primary,

  modalOverlay: rgba(raw.black, 0.88),
  modalBackground: raw.white,

  label: raw.red,
  labelText: raw.white,
  labelFun: raw.green,
  labelAccom: raw.blue,
  labelTravel: raw.yellow,
  labelWarning: raw.orange,
  labelBooked: raw.green,
  labelFood: raw.bluealt,

  slider: raw.white,
  sliderProgress: primary,
  sliderHandle: raw.whitesmoke,
  sliderHandleHover: raw.white,
  sliderHandleBorderHover: lighten(0.2)(primary),
  sliderTooltip: raw.black,

  focusRing: raw.blue,

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
  inputFocus: raw.whitesmoke,
  selectValue: raw.whitesmoke,

  datePicker: raw.white,

  notification: raw.black,
  notificationWarning: raw.orange,
  notificationGood: raw.green,

  tripBoxBackground: rgba(raw.black, 0.5),
  tripBoxBackgroundHover: rgba(raw.black, 0.75),
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
