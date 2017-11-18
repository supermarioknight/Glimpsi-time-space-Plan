import { injectGlobal } from 'styled-components';

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
    height: 100%;
    min-height: 100%;
    margin: 0;
  }
`;
