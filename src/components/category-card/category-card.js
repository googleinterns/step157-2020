import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './category-card.css';

class CategoryCard extends Component {
  constructor(props) {
    super(props); 

    this.state = {
        seeMore: false
    }
  }

  seeMorePressed(e) {
    e.preventDefault();

    if (!this.state.seeMore) {
      this.setState({
          seeMore: true
      })
    }
    else {
      this.setState({
          seeMore: false
      })
    }
  }

  render() {
    const { seeMore } = this.state;
    let subskills = <div>{this.props.subskills[0].name}</div>
    let button = (
      <div onClick={e => {this.seeMorePressed(e)}} className='btn-see-more'>
          <span className='expand-text'>See more</span><span className="material-icons">expand_more</span>
      </div>
    )

    if (seeMore) {
      subskills = this.props.subskills.map(subskill => {
        return (
          <div>{subskill.name}</div>
        )
      })

      button = <div onClick={e => {this.seeMorePressed(e)}} className='btn-see-more'>
          <span className='expand-text'>See less</span><span className="material-icons">expand_less</span>
      </div>
    }

    return (
      <NavLink className='category-link' exact to={`/skills/${this.props.name.toLowerCase()}`}>
        <div className='category-card'>
          <img className='category-img' src={this.props.img} />
          <div className='category-text-container'>
            <div className='category-title'>{this.props.name}</div>
            <div className='category-desc'>{this.props.desc}</div>
            {subskills}
            {button}
          </div>
        </div>
      </NavLink>
    )
  }
}

export default CategoryCard