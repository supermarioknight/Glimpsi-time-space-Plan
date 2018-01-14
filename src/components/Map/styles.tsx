import styled from 'styled-components';
import colors from '../../assets/styles/colors';

interface MarkerProps {
  interactive?: boolean;
}

export const Marker = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 3px solid ${colors.primary};
  color: ${colors.textLight};
  background: ${colors.primary};
  width: 32px;
  height: 32px;
  font-size: 16px;
  cursor: ${(props: MarkerProps) => (props.interactive ? 'pointer' : 'default')};

  &:hover {
    box-shadow: 0 1px 10px ${colors.cardFocused};
  }
`;
