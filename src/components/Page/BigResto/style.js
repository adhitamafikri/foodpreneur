import styled from 'styled-components';
import { Div } from '../../common';
import { HEADER_HEIGHT } from '../../StyleVariables';

export const FullHeightContainer = styled(Div)`
  height: calc(${window.outerHeight - 75 + 'px'} - ${HEADER_HEIGHT});
  position: relative;
`;
export const FullHeightOrnament = styled(Div)`
  height: calc(${window.outerHeight + 200 + 'px'});
  position: relative;
`;
