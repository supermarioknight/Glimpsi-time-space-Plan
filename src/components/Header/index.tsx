import * as React from 'react';
import styled from 'styled-components';
import colors from '../../assets/styles/colors';
import bp from '../../assets/styles/breakpoints';

const Root = styled.header`
  display: flex;
  align-items: center;
  height: 42px;
  padding: 10px;
  background-color: ${colors.primary};

  ${bp.tablet`
    height: 51px;
  `};

  ${bp.desktop`
    height: 64px;
  `};
`;

const Header = () => <Root>glimpsi</Root>;

export default Header;
