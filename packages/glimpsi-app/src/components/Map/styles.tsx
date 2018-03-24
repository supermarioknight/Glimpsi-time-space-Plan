import styled from 'styled-components';
import colors from '../../assets/styles/colors';
import * as grid from '../../assets/styles/grid';
import * as fonts from '../../assets/styles/fonts';

interface MarkerProps {
  interactive?: boolean;
  small?: boolean;
}

export const ErrorOverlay = styled.div`
  ${fonts.size.xlarge};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.modalOverlay};
  color: ${colors.textLight};
  text-align: center;
  padding: ${grid.unitless * 2}px;
`;

export const Marker = styled.div`
  ${(props: MarkerProps) => (props.small ? fonts.size.small : fonts.size.large)};
  ${fonts.weight.normal};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: ${colors.textLight};
  background: ${colors.marker};
  width: ${(props: MarkerProps) => grid.unitless * (props.small ? 3 : 4)}px;
  height: ${(props: MarkerProps) => grid.unitless * (props.small ? 3 : 4)}px;
  flex-shrink: 0;
  border: 2px solid ${colors.markerBorder};
  cursor: ${(props: MarkerProps) => (props.interactive ? 'pointer' : 'default')};

  &:hover {
    box-shadow: 0 1px 10px ${colors.cardFocused};
  }
`;
