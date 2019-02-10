import styled from 'styled-components';
import { Div } from '../../common';
import { HEADER_HEIGHT } from '../../StyleVariables';

export const FullHeightContainer = styled(Div)`
  height: calc(100vh - ${HEADER_HEIGHT});
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
