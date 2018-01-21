import { css } from 'styled-components';
import 'focus-visible';
import colors from '../../assets/styles/colors';

export const borderRadius = css`
  border-radius: 2px;
`;

export const clamp = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const focusRing = {
  keyboardOnly: css`
    :focus {
      outline: 0;
    }

    &.focus-visible:focus {
      outline: 2px solid ${colors.focusRing};
      outline-offset: 2px;
    }
  `,

  raw: css`
    outline: 2px solid ${colors.focusRing};
    outline-offset: 2px;
  `,

  default: css`
    :focus {
      outline: 2px solid ${colors.focusRing};
      outline-offset: 2px;
    }
  `,
};
