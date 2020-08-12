import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './subskill-card.css';

class SubskillCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavLink className='category-link' exact to={`/skills/${this.props.category}/${this.props.subskill.name}`}>
        <div className='category-card'>
          <div className='category-text-container'>
            <div className='category-title'>{this.props.subskill.name}</div>
            <div className='category-desc'>{this.props.subskill.desc}</div>
          </div>
        </div>
      </NavLink>
    )
  }
}

export default SubskillCard

