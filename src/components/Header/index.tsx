import * as React from 'react';
import styled from 'styled-components';
import { colors } from '../../assets/styles/variables';
import bp from '../../assets/styles/breakpoints';

const Root = styled.header`
  height: 42px;
  background-color: ${colors.primary};

  ${bp.tablet`
    height: 51px;
  `};

  ${bp.desktop`
    height: 64px;
  `};
`;

const Header = () => <Root />;

export default Header;
