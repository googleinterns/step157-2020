import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './Home.css';
 
class Home extends Component {
   render() {
       return (
         <div className='home-container'>
           <div className='home-text-container'> 
               <div className='home-title'> The first marketplace exclusively for skills</div>
               <div className='home-subtitle'> Learn, exchange, connect</div>
               <div className='home-btn-container'>
                   <NavLink className='home-btn btn-signup-active' activeClassName='active' exact to='/signin'>Sign In</NavLink>
                   <NavLink className='home-btn btn-explore-active' activeClassName='active' exact to='/explore'>Explore</NavLink>
               </div>
           </div>
           <div className = "home-img-container">
           <img className='home-img' src='https://newevolutiondesigns.com/images/freebies/cool-wallpaper-1.jpg' />
           </div>
         </div>
       );
   }
}
 
export default Home

