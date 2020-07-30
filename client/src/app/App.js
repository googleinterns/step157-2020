import React from 'react';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";


import './App.css';

// Components
import Navbar from './components/Navbar.js';

// Pages
import Home from './pages/Home.js';
import Explore from './pages/Explore.js';
import Team from './pages/Team.js';
import SignIn from './pages/SignIn.js';
import SignUp from './pages/SignUp.js';
import SkillPage from './pages/SkillPage.js';

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/explore" component={Explore} />
      <Route exact path="/team" component={Team} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/skills/:skillId" component={SkillPage} />
    </Switch>
  </Router>
);

export default App;