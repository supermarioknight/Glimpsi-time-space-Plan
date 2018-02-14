import styled, { css } from 'styled-components';
import DateSlider from '../DateSlider';
import ConncetedTimeline from '../../components/Timeline/Connected';
import bp from '../../assets/styles/breakpoints';
import colors from '../../assets/styles/colors';
import * as grid from '../../assets/styles/grid';
import * as zIndex from '../../assets/styles/zIndex';
import Blankett from '../Blanket';

export const Blanket = styled(Blankett)`
  opacity: 0.5;
`;

export const Root = styled.main`
  /* display: grid; */
  position: relative;
  height: 100%;
  /* grid-template-areas:
    'slider'
    'map'
    'cards';
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%; */

  ${bp.tablet.css`
    display: grid;
    grid-template-areas:
      'slider cards'
      'map cards'
      'map cards';
    grid-template-rows: auto 1fr 1fr;
    grid-template-columns: 1fr auto;
  `};
`;

interface MobilePageProps {
  active: boolean;
  position: 'left' | 'right';
}

export const MobilePage = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  height: 100%;
  width: 80%;
  top: 0;
  background-color: ${colors.background};
  overflow: auto;
  ${(props: MobilePageProps) =>
    props.position === 'left'
      ? css`
          left: 0;
        `
      : css`
          right: 0;
        `};

  ${(props: MobilePageProps) =>
    props.active
      ? css`
          z-index: ${zIndex.mobilePage};
        `
      : css`
          opacity: 0.5;
        `};
`;

export const MapContainer = styled.div`
  grid-area: map;
  flex-basis: 100%;
`;

export const Slider = styled(DateSlider)`
  grid-area: slider;
`;

export const Timeline = styled(ConncetedTimeline)`
  grid-area: cards;
  width: 100%;
  overflow: auto;
  padding: 0 ${grid.px};

  ${bp.tablet.css`
    width: ${grid.unitless * 45}px;
    padding: ${grid.px};
  `};

  ${bp.desktop.css`
    width: ${grid.unitless * 50}px;
  `};
`;
