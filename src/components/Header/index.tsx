import * as React from 'react';
import styled from 'styled-components';
import { colors } from '../../assets/styles/variables';

const Root = styled.header`
  height: 64px;
  background-color: ${colors.primary};
`;

const Header = () => <Root />;

export default Header;
