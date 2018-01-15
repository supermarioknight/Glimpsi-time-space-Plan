import { css, ThemedCssFunction, SimpleInterpolation } from 'styled-components';
import { mapValues } from 'lodash-es';

const sizes = {
  desktopHd: 1440,
  desktop: 1024,
  tablet: 768,
  phone: 320,
};

const breakpoints = mapValues(sizes, value => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = value / 16;
  // tslint:disable-next-line no-any
  const func: ThemedCssFunction<any> = (
    strings: TemplateStringsArray,
    ...interpolations: SimpleInterpolation[]
  ) =>
    css`
      @media (min-width: ${emSize}em) {
        ${css(strings, ...interpolations)};
      }
    `;

  return {
    css: func,
  };
});

export default breakpoints;
