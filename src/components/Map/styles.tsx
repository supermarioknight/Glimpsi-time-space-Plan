import styled from 'styled-components';
import { colors } from '../../assets/styles/variables';

export const Marker = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 3px solid ${colors.primary};
  color: ${colors.textLight};
  background: ${colors.primary};
  width: 40px;
  height: 40px;
  font-size: 16px;
`;
