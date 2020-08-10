import React from 'react';
import { NavLink } from 'react-router-dom';

import './category-card.css';

const CategoryCard = ({img, name, desc}) => (
  <NavLink className="category-link" exact to={`/skills/${name.toLowerCase()}`}>
    <div className="category-card">
      <img alt="category" className="category-img" src={img} />
      <div className="category-text-container">
        <div className="category-title">
          {' '}
          {name}
          {' '}
        </div>
        <div className="category-desc">
          {' '}
          {desc}
          {' '}
        </div>
      </div>
    </div>
  </NavLink>
);

export default CategoryCard;
