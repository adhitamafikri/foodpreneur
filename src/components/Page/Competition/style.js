import styled from 'styled-components';
import { Div } from '../../common';
import { HEADER_HEIGHT } from '../../StyleVariables';

export const FullHeightContainer = styled(Div)`
  height: calc(100vh - ${HEADER_HEIGHT});
  position: relative;
`;
