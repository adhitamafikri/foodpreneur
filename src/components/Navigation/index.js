import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <NavLink to="/">Festival</NavLink>
      <NavLink to="/competition">Competition</NavLink>
      <NavLink to="/big-resto">Big Resto</NavLink>
    </div>
  );
}

export default Navigation;
