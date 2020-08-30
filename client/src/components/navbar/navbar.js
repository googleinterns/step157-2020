import React from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.css';

/*
 * React component for the navigation bar
 * @returns {JSX.Element} The Navbar component
 */
function Navbar() {
  return (
    <div className="navbar">
      <NavLink className="nav-logo" exact to="/">Xchange</NavLink>
      <div className="nav-links">
        <NavLink className="nav-link" activeClassName="nav-link-active" exact to="/explore">Explore</NavLink>
        <NavLink className="nav-link" activeClassName="nav-link-active" exact to="/team">Meet the Team</NavLink>
        <NavLink className="nav-link" activeClassName="nav-link-active" exact to="/signin">Sign In</NavLink>
        <NavLink className="nav-link" activeClassName="nav-link-active" exact to="/profile/:id?">My Profile</NavLink>
      </div>
    </div>
  );
}

export default Navbar;