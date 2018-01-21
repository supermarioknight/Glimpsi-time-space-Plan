import styled from 'styled-components';
import colors from '../../assets/styles/colors';
import * as grid from '../../assets/styles/grid';
import * as fonts from '../../assets/styles/fonts';
import * as mixins from '../../assets/styles/mixins';

interface Props {
  children: string;
}

const colorMap = {
  accom: colors.labelAccom,
  travel: colors.labelTravel,
  fun: colors.labelFun,
  'need to book': colors.labelWarning,
  booked: colors.labelBooked,
};

export const Label = styled.div`
  ${fonts.size.small};
  ${mixins.borderRadius};
  display: inline-block;
  padding: ${grid.unitless / 2}px ${grid.px};
  background-color: ${(props: Props) => colorMap[props.children] || colors.label};
  color: ${colors.labelText};
`;

export const LabelGroup = styled.div`
  text-align: right;

  > ${Label} {
    margin-right: ${grid.px};

    &:last-child {
      margin-right: 0;
    }
  }
`;
