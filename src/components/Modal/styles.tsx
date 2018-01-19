import styled from 'styled-components';
import BestModal from 'react-best-modal';
import colors from '../../assets/styles/colors';
import * as zIndex from '../../assets/styles/zIndex';
import * as mixins from '../../assets/styles/mixins';

export const FixedBestModal = styled(BestModal)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${zIndex.modal};
`;

export const Card = styled.div`
  ${mixins.borderRadius};
  background-color: ${colors.cardBackground};
  padding: 10px;
  position: relative;
  z-index: 1;
`;
