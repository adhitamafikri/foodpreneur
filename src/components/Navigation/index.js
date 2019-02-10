import React from 'react';
import { NavLink } from 'react-router-dom';

import StyledNavigation from './style';

const Navigation = () => (
  <StyledNavigation>
    <NavLink to="/">
      <p>Big Resto</p>
    </NavLink>
    <NavLink to="/festival">
      <p>Festival</p>
    </NavLink>
    <NavLink to="/competition">
      <p>Competition</p>
    </NavLink>
  </StyledNavigation>
);

export default Navigation;
