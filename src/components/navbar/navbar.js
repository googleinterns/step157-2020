import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'

import './Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <NavLink className='nav-logo' exact to='/'>Xchange</NavLink>
        <div className="nav-links">
          <NavLink className='nav-link' activeClassName='nav-link-active' exact to='/explore'>Explore</NavLink>
          <NavLink className='nav-link' activeClassName='nav-link-active' exact to='/team'>Meet the Team</NavLink>
          <NavLink className='nav-link' activeClassName='nav-link-active' exact to='/signin'>Sign In</NavLink>
        </div>
      </div>
    )
  }
}

export default Navbar