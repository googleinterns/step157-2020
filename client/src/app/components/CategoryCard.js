import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'; 

import './CategoryCard.css';
 
const CategoryCard = (props) => {

  return ( 
    <NavLink className='category-link' exact to={`/skills/${props.name.toLowerCase()}`}>
      <div className='category-card'>
        <img className='category-img' src={props.img} />
        <div className='category-text-container'>
          <div className='category-title' > {props.name} </div>
          <div className='category-desc'> {props.desc} </div>
        </div>
      </div>
    </NavLink>
  );  
}
 
export default CategoryCard

