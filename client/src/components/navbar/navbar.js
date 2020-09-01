import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

import './navbar.css';

/**
 * React component for the navigation bar
 * @param {object} props The component props
 * @returns {JSX.Element} An HTML div with an edit button and the user profile
 * @example
 * return (<Navbar />)
 */
function Navbar(props) {
  const {
    id,
  } = props;

  return id !== null ? (
    <div className="navbar">
      <NavLink className="nav-logo" exact to="/">Xchange</NavLink>
      <div className="nav-links">
        <NavLink className="nav-link" activeClassName="nav-link-active" exact to="/explore">Explore</NavLink>
        <NavLink className="nav-link" activeClassName="nav-link-active" exact to="/profile">Profile</NavLink>
        <NavLink className="nav-link" activeClassName="nav-link-active" exact to="/chat">Chat</NavLink>
      </div>
    </div>
  ) : (
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

const mapStateToProps = (state) => ({
  id: state.user.id,
});

export default connect(mapStateToProps)(Navbar);
