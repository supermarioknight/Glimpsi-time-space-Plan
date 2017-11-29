import React from 'react';
import styled from 'styled-components';
import Header from '../Header';
import { colors } from '../../assets/styles/variables';

interface Props {
  children: React.ReactNode;
}

const Root = styled.div`
  background-color: ${colors.background};
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const AppSkeleton: React.StatelessComponent<Props> = ({ children }) => (
  <Root>
    <Header />
    {children}
  </Root>
);

export default AppSkeleton;
