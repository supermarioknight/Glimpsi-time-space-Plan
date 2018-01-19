import styled from 'styled-components';
import colors from '../../assets/styles/colors';
import bp from '../../assets/styles/breakpoints';
import * as mixins from '../../assets/styles/mixins';

interface RootProps {
  focused?: boolean;
}

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 2px;
  padding: 10px;
  height: 150px;
  min-width: 300px;
  background-size: cover;
  background-position: center center;
  background-color: ${colors.cardBackground};
  position: relative;
  margin: 0;
  box-shadow: ${(props: RootProps) =>
    props.focused ? `0px 2px 10px ${colors.cardFocused}` : 'none'};

  ${bp.tablet.css`
    margin: 12px 0;
  `};
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 26px;
`;

export const Minutes = styled.div`
  margin-left: auto;
`;

export const Location = styled.div`
  ${mixins.focusRing.keyboardOnly};
  font-size: 18px;
`;

export const DateTime = styled.div`
  display: flex;
  font-size: 16px;
`;
