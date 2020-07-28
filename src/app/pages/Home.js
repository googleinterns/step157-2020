import React, { Component, Fragment } from 'react'

import './Home.css';

class Home extends Component {
    render(){
        return (
          <div className='home-container'>
            <div className='home-text-container'>
                <div className='home-title'> The first marketplace exclusively for skills</div>
                <div className='home-subtitle'> Learn, exchange, connect</div>
                <div className='home-btn-container'>
                    <a className='home-btn btn-signup' href='./signin' >Sign In</a>
                    <a className='home-btn btn-explore' href='./explore'>Explore </a>
                </div>
            </div>
            <div className = "home-img-container"> 
            <img className='home-img' src='https://newevolutiondesigns.com/images/freebies/cool-wallpaper-1.jpg' />
            </div>
          </div>
        )
    }
}

export default Home