import React from 'react';
import { NavLink } from 'react-router-dom';

import StyledNavigation from './style';

const Navigation = () => {
  return (
    <StyledNavigation>
      <NavLink to="/">
        <p>Festival</p>
      </NavLink>
      <NavLink to="/competition">
        <p>Competition</p>
      </NavLink>
      <NavLink to="/big-resto">
        <p>Big Resto</p>
      </NavLink>
    </StyledNavigation>
  );
}

export default Navigation;
