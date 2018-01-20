import styled from 'styled-components';
import colors from '../../assets/styles/colors';
import * as grid from '../../assets/styles/grid';
import * as fonts from '../../assets/styles/fonts';

interface MarkerProps {
  interactive?: boolean;
}

export const Marker = styled.div`
  ${fonts.size.large};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: ${colors.textLight};
  background: ${colors.marker};
  width: ${grid.unitless * 4}px;
  height: ${grid.unitless * 4}px;
  flex-shrink: 0;
  border: 2px solid ${colors.markerBorder};
  cursor: ${(props: MarkerProps) => (props.interactive ? 'pointer' : 'default')};

  &:hover {
    box-shadow: 0 1px 10px ${colors.cardFocused};
  }
`;
