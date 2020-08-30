import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// eslint-disable-next-line react/prefer-stateless-function
class SubskillCard extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      /* eslint-disable react/destructuring-assignment */
      <NavLink className="category-link" exact to={`/skills/${this.props.category}/${this.props.subskill.name}`}>
        <div className="category-card">
          <div className="category-text-container">
            <div className="category-title">{this.props.subskill.name}</div>
            <div className="category-desc">{this.props.subskill.desc}</div>
          </div>
        </div>
      </NavLink>
      /* eslint-enable react/destructuring-assignment */
    );
  }
}

export default SubskillCard;
