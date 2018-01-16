import styled from 'styled-components';
import colors from '../../assets/styles/colors';
import * as grid from '../../assets/styles/grid';

interface Props {
  children: string;
}

const colorMap = {
  accom: colors.labelAccom,
  travel: colors.labelTravel,
  fun: colors.labelFun,
};

export const Label = styled.div`
  display: inline-block;
  padding: ${grid.unitless / 2}px ${grid.px};
  border-radius: 4px;
  margin: ${grid.px};
  background-color: ${(props: Props) => colorMap[props.children] || colors.label};
`;
