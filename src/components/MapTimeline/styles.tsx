import styled from 'styled-components';
import Sliderr from '../Slider';
import ConncetedTimeline from '../../components/Timeline/Connected';
import bp from '../../assets/styles/breakpoints';
import * as grid from '../../assets/styles/grid';

export const Root = styled.main`
  display: grid;
  height: 100%;
  grid-template-areas:
    'slider'
    'map'
    'cards';
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;

  ${bp.tablet.css`
    grid-template-areas:
      'slider cards'
      'map cards'
      'map cards';
    grid-template-rows: auto 1fr 1fr;
    grid-template-columns: 1fr auto;
  `};
`;

export const MapContainer = styled.div`
  grid-area: map;
`;

export const Slider = styled(Sliderr)`
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
