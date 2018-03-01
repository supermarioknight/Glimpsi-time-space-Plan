import styled, { css } from 'styled-components';
import DefaultButton from '../Button';
import * as grid from '../../assets/styles/grid';
import * as fonts from '../../assets/styles/fonts';
import * as mixins from '../../assets/styles/mixins';

export const Root = styled.div`
  > * {
    flex-shrink: 0;
  }
`;

interface DayContainerProps {
  fade: boolean;
}

export const OnboardingMessage = styled.div`
  ${fonts.size.large};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: ${grid.unitless * 2}px;
  text-align: center;
  line-height: 1.5em;
`;

export const Day = styled.div`
  display: block;
  padding-top: ${grid.unitless * 2}px;
  ${(props: DayContainerProps) =>
    mixins.applyIf(
      props.fade,
      css`
        opacity: 0.5;
        filter: grayscale();
      `
    )};
  transition: opacity 0.2s;
`;

export const Button = styled(DefaultButton)`
  margin-left: auto;
`;
