import React from 'react';
import styled from 'styled-components';
import { HEADER_HEIGHT, HEADER_ZINDEX } from '../StyleVariables';

const StyledHeader = styled.header`
  background: white;
  box-shadow: 0 0 20px 2px rgba(0,0,0,0.15);
  position: fixed;
  top: 0;
  width: 100%;
  height: ${HEADER_HEIGHT};
  z-index: ${HEADER_ZINDEX};
`;

const Header = () => (
  <StyledHeader>
    <h1>Header</h1>
  </StyledHeader>
);

export default Header;
