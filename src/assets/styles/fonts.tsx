import { css } from 'styled-components';

export const size = {
  small: css`
    font-size: 12px;
  `,

  regular: css`
    font-size: 14px;
  `,

  large: css`
    font-size: 18px;
  `,

  xlarge: css`
    font-size: 24px;
  `,

  xxlarge: css`
    font-size: 40px;
  `,
};

export const weight = {
  thin: css`
    font-weight: 200;
  `,

  normal: css`
    font-weight: 400;
  `,

  thickish: css`
    font-weight: 500;
  `,

  thick: css`
    font-weight: 600;
  `,
};

export const type = {
  sansSerif: css`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Noto Sans', 'Ubuntu',
      'Droid Sans', 'Helvetica Neue', sans-serif;
  `,

  monospaced: css`
    font-family: 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', 'Ubuntu Mono', Menlo, Courier, monospace;
  `,
};
