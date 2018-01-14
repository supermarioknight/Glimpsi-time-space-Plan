import { injectGlobal } from 'styled-components';
import { kebabCase, mapValues } from 'lodash-es';

const APP_PREFIX = 'ar';

const rawColors = {
  white: '#fff',
  red: 'red',
  whiteSmoke: '#f5f5f5',
  green: 'green',
  orange: 'orange',
  black: 'black',
};

const _colors = {
  primary: rawColors.red,
  background: rawColors.whiteSmoke,
  positive: rawColors.green,
  warning: rawColors.orange,
  negative: rawColors.red,

  cardFocused: 'rgba(0, 0, 0, 0.50)',
  cardBackground: rawColors.white,
  cardActionsBackground: 'rgba(0, 0, 0, 0.75)',

  label: 'yellow',

  textLight: rawColors.white,
  textDark: rawColors.black,

  modalOverlay: 'rgba(0, 0, 0, 0.5)',
  modalBackground: rawColors.white,
};

const colors = mapValues(_colors, (_, key) => `var(--${APP_PREFIX}-${kebabCase(key)})`);

export default colors;

// tslint:disable-next-line no-unused-expression
injectGlobal`
  :root {
    ${Object.entries(_colors)
      .map(([key, value]) => `--${APP_PREFIX}-${kebabCase(key)}: ${value};`)
      .join('')}
  }
`;
