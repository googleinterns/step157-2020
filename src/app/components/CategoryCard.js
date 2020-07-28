import React, { Component, Fragment } from 'react'

import './CategoryCard.css';

class CategoryCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
        <div className='category-card'>
          <img className='category-img' src={this.props.img} />
          <div className='category-text-container'>
            <div className='category-title'> {this.props.name} </div>
            <div className='category-desc'> {this.props.desc} </div>
          </div>
        </div>
    )
  }
}

export default CategoryCard