import React from 'react';

import './home.css';

const Home = () => (
  <div className="home-container">
    <div className="home-text-container">
      <div className="home-title">The first marketplace exclusively for skills</div>
      <div className="home-subtitle">Learn, exchange, connect</div>
      <div className="home-btn-container">
        <a href="/signin" className="home-btn btn-signup">Sign Up</a>
        <a href="/explore" className="home-btn btn-explore">Explore</a>
      </div>
    </div>
    <div className="home-img-container">
      <img className="home-img" src="https://newevolutiondesigns.com/images/freebies/cool-wallpaper-1.jpg" alt="img" />
    </div>
  </div>
);

export default Home;
