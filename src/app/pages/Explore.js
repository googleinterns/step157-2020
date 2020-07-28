import React, { Component, Fragment } from 'react'
import { configureStore } from '@reduxjs/toolkit'

import './Explore.css';

//Component
import CategoryCard from '../components/CategoryCard'

//const store = configureStore({ reducer: counterReducer })

//console.log(store.getState())

class Explore extends Component {
  render() {
    const categories = [
      {
        name: 'Sports',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend quam eu sodales sollicitudin.',
        img: 'https://newevolutiondesigns.com/images/freebies/cool-wallpaper-1.jpg'
    },
      {
        name: 'Academic',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend quam eu sodales sollicitudin.',
        img: 'https://newevolutiondesigns.com/images/freebies/cool-wallpaper-1.jpg'
    },
      {
        name: 'Games',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend quam eu sodales sollicitudin.',
        img: 'https://newevolutiondesigns.com/images/freebies/cool-wallpaper-1.jpg'
      },
      {
        name: 'Art',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend quam eu sodales sollicitudin.',
        img: 'https://newevolutiondesigns.com/images/freebies/cool-wallpaper-1.jpg'
    },
      {
        name: 'Languages',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend quam eu sodales sollicitudin.',
        img: 'https://newevolutiondesigns.com/images/freebies/cool-wallpaper-1.jpg'
      },
      {
        name: 'Music',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend quam eu sodales sollicitudin.',
        img: 'https://newevolutiondesigns.com/images/freebies/cool-wallpaper-1.jpg'
      },
      {
        name: 'Cooking',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend quam eu sodales sollicitudin.',
        img: 'https://newevolutiondesigns.com/images/freebies/cool-wallpaper-1.jpg'
      },
      {
        name: 'Lifestyle',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend quam eu sodales sollicitudin.',
        img: 'https://newevolutiondesigns.com/images/freebies/cool-wallpaper-1.jpg'
      }
    ]

    return (
      <div className='explore-container'>
        <div className='explore-title-container'>
          <div className="explore-title">Explore</div>
          <div className="explore-subtitle">Explore different skillsharing categories.</div>
        </div>
        <div className='categories-container'>
          {categories.map(category => {
              console.log(category)

              return (
                  <CategoryCard name={category.name} desc={category.desc} img={category.img}/>
              )
          })}
        </div>
      </div>
    )
  }
}

export default Explore