import styled, { css } from 'styled-components';

export const slider = css`
  overflow: visible;
  margin: 10px 20px;
  flex-basis: 100%;

  .rheostat-background {
    background-color: #fcfcfc;
    border: 1px solid #d8d8d8;
    position: relative;
    height: 15px;
    top: 0px;
    width: 100%;
  }

  .rheostat-progress {
    background-color: #abc4e8;
    position: absolute;
    height: 13px;
    top: 1px;
  }
`;

export const Root = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  flex-shrink: 0;
`;

const handleTooltipMarkup = 'div';

export const HandleTooltip = styled[handleTooltipMarkup]`
  opacity: 0;
  pointer-events: none;
  position: absolute;
  padding-left: 50%;
  transform: translate3d(-50%, -180%, 0);
  font-size: 15px;
  transition: opacity 0.2s;
`;

export const Handle = styled.button`
  border-radius: 50%;
  height: 24px;
  width: 24px;
  z-index: 2;
  margin-left: -12px;
  top: -5px;

  &:hover
    > ${handleTooltipMarkup},
    &:focus
    > ${handleTooltipMarkup},
    &:active
    > ${handleTooltipMarkup} {
    opacity: 1;
  }
`;

export const DateLabel = styled.span`
  white-space: nowrap;
`;
