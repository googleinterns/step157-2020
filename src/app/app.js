import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from '../components/navbar/navbar.js';
import Home from '../pages/home/home.js';
import Explore from '../pages/explore/explore.js';
import SignIn from '../pages/sign-in/sign-in.js';
import SignUp from '../pages/sign-up/sign-up.js';
import SkillPage from '../pages/skill/skill-page.js';
import SubskillPage from '../pages/subskill/subskill-page.js';

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/explore" component={Explore} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/skills/:skillId" component={SkillPage} />
      <Route exact path="/skills/:skillId/:subskillId" component={SubskillPage} />
    </Switch>
  </Router>
);

export default App;
