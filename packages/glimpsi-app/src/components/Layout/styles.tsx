import styled from 'styled-components';
import Header from '../Header';

export const Root = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const FixedHeader = styled(Header)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;
