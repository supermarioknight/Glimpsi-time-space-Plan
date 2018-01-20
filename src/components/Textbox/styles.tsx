import styled from 'styled-components';
import * as fonts from '../../assets/styles/fonts';
import * as mixins from '../../assets/styles/mixins';
import * as grid from '../../assets/styles/grid';

export const Input = styled.input`
  ${fonts.size.large};
  ${mixins.focusRing.default};
  ${mixins.borderRadius};
  border: none;
  padding: ${grid.px};

  :focus {
    outline-offset: 0;
  }
`;

export const Label = styled.label`
  ${fonts.size.large};
`;

export const LabelText = styled.span`
  display: block;
  opacity: 0;
  position: absolute;
  pointer-events: none;
`;
