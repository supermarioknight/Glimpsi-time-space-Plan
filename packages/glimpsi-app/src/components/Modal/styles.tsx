import styled from 'styled-components';
import BestModal from 'react-best-modal';
import colors from '../../assets/styles/colors';
import * as zIndex from '../../assets/styles/zIndex';
import * as mixins from '../../assets/styles/mixins';
import * as grid from '../../assets/styles/grid';
import bp from '../../assets/styles/breakpoints';
import * as transitions from '../../assets/styles/transitions';
import Blankett from '../Blanket';

export const FixedBestModal = styled(BestModal)`
  position: fixed;
  padding: ${grid.px};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${zIndex.modal};
`;

export const Blanket = styled(Blankett)`
  ${transitions.fade(100)};
`;

export const Card = styled.div`
  ${transitions.fadeUp(200)};
  ${mixins.borderRadius};
  width: 100vw;
  max-height: 100vh;
  background-color: ${colors.cardBackground};
  position: relative;
  z-index: 1;
  overflow: auto;

  ${bp.tablet.css`
    width: 80vw;
    max-width: ${grid.unitless * 80}px;
    max-height: 80vh;
  `};
`;
