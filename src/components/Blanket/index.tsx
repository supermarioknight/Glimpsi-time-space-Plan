import styled from 'styled-components';
import colors from '../../assets/styles/colors';

interface Props {
  position?: 'fixed' | 'absolute';
}

const Blanket = styled.div`
  position: ${(props: Props) => props.position || 'fixed'};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${colors.modalOverlay};
`;

export default Blanket;
