import { css, ThemedCssFunction, SimpleInterpolation } from 'styled-components';

const sizes = {
  desktopHd: 1440,
  desktop: 1024,
  tablet: 768,
  phone: 320,
};

export default Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16;
  // tslint:disable-next-line no-any
  const func: ThemedCssFunction<any> = (
    strings: TemplateStringsArray,
    ...interpolations: SimpleInterpolation[]
  ) => css`@media (max-width: ${emSize}em) {${css(strings, ...interpolations)};}`;
  accumulator[label] = func;
  return accumulator;
}, {});
