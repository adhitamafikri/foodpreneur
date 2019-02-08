import styled from 'styled-components';
import Div from '../../Div';

export const FullHeightContainer = styled(Div)`
  height: 100vh;
  position: relative;
`;

export const OrnamentContainer = styled(Div)`
  position: absolute;
  top: 50%; left: 0;
  transform: translate(0, -50%);
  width: 100%;
  height: 90%;
  clip-path: polygon(0 25%, 0 80%, 100% 90%, 100% 10%);
`;
