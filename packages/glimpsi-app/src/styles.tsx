import { injectGlobal } from 'styled-components';
import * as fonts from './assets/styles/fonts';
import colors from './assets/styles/colors';
import * as mixins from './assets/styles/mixins';

// tslint:disable-next-line no-unused-expression
injectGlobal`
  #root {
    display: inline;
  }

  * {
    box-sizing: border-box;
  }

  html,
  body {
    ${fonts.type.sansSerif};
    ${fonts.size.regular};
    ${fonts.weight.normal};
    height: 100%;
    min-height: 100%;
    margin: 0;
  }

  body {
    background: ${colors.background};

  }

  a {
    ${mixins.focusRing.keyboardOnly};
  }
`;
