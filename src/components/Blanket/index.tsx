import styled from 'styled-components';
import { colors } from '../../assets/styles/variables';

const Blanket = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${colors.modalOverlay};
`;

export default Blanket;
