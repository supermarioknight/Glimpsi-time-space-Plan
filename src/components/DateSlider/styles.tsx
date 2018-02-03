import styled, { css } from 'styled-components';
import colors from '../../assets/styles/colors';
import * as grid from '../../assets/styles/grid';
import * as mixins from '../../assets/styles/mixins';

export const slider = css`
  overflow: visible;
  margin: ${grid.px} ${grid.unitless * 2}px;
  flex-basis: 100%;

  .rheostat-background {
    ${mixins.borderRadius};
    background-color: ${colors.slider};
    border: none;
    position: relative;
    height: ${grid.unitless * 2}px;
    top: 0px;
    width: 100%;
  }

  .rheostat-progress {
    background-color: ${colors.sliderProgress};
    position: absolute;
    height: ${grid.unitless * 2}px;
    top: 0;
  }
`;

export const Root = styled.div`
  display: flex;
  align-items: center;
  padding: ${grid.px};
  flex-shrink: 0;
`;

const handleTooltipMarkup = 'div';

export const HandleTooltip = styled[handleTooltipMarkup]`
  opacity: 0;
  pointer-events: none;
  position: absolute;
  padding-left: 50%;
  padding-bottom: ${grid.px};
  transform: translate3d(-50%, -180%, 0);
  transition: opacity 0.2s;

  > span {
    background-color: ${colors.sliderTooltip};
    padding: ${grid.px};
  }
`;

export const Handle = styled.button`
  ${mixins.focusRing.keyboardOnly};
  color: ${colors.textLight};
  border-radius: 50%;
  height: 24px;
  width: 24px;
  z-index: 2;
  margin-left: -12px;
  top: -5px;
  border: 2px solid ${colors.sliderProgress};
  cursor: pointer;

  &:hover
    > ${handleTooltipMarkup},
    &:focus
    > ${handleTooltipMarkup},
    &:active
    > ${handleTooltipMarkup} {
    opacity: 1;
  }

  &:hover,
  &:active {
    border-color: ${colors.sliderHandleBorderHover};
    background-color: ${colors.sliderHandleHover};
  }
`;

export const DateLabel = styled.span`
  white-space: nowrap;
`;
