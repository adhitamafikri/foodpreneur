import React from 'react';
import styled from 'styled-components';
import { HEADER_HEIGHT } from '../StyleVariables';

const StyledMain = styled.main`
  margin-top: ${HEADER_HEIGHT};
`;

const Main = (props) => <StyledMain>{props.children}</StyledMain>

export default Main;
