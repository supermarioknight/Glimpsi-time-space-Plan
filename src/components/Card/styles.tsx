import styled from 'styled-components';
import colors from '../../assets/styles/colors';
import bp from '../../assets/styles/breakpoints';
import * as mixins from '../../assets/styles/mixins';
import * as grid from '../../assets/styles/grid';
import * as fonts from '../../assets/styles/fonts';

interface RootProps {
  elevated?: boolean;
}

export const Root = styled.div`
  ${mixins.borderRadius};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: ${grid.px};
  height: ${grid.unitless * 15}px;
  min-width: ${grid.unitless * 38}px;
  background-size: cover;
  background-position: center center;
  background-color: ${colors.cardBackground};
  position: relative;
  margin: 0;
  box-shadow: ${(props: RootProps) =>
    props.elevated ? `0px 2px 10px ${colors.cardFocused}` : 'none'};

  ${bp.tablet.css`
    margin: ${grid.px} 0;
  `};
`;

export const Title = styled.h2`
  ${fonts.size.large};
  display: flex;
  align-items: center;
  margin: 0;

  > :first-child {
    margin-right: ${grid.px};
  }
`;

export const Notes = styled.p`
  ${mixins.clamp};
  margin: 0;
`;

export const Location = styled.div`
  ${mixins.focusRing.keyboardOnly};
  ${mixins.clamp};
  ${fonts.size.large};
`;

export const DateTime = styled.div`
  display: flex;
`;

export const NoWrap = styled.span`
  ${mixins.clamp};
`;
