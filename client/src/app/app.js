import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from '../components/navbar/navbar.js';
import PrivateRoute from '../components/private-route/private-route.js';
import Home from '../pages/home/home.js';
import Team from '../pages/team/team.js';
import Explore from '../pages/explore/explore.js';
import SignIn from '../pages/sign-in/sign-in.js';
import SignUp from '../pages/sign-up/sign-up.js';
import Profile from '../features/user-profile/user-profile.js';
import Chat from '../features/chat/chat.js';
import SkillPage from '../pages/skill/skill-page';
import SubskillPage from '../pages/subskill/subskill-page';
import Search from '../pages/search/search.js';

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/team" component={Team} />
      <Route exact path="/explore" component={Explore} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/profile/:id?" component={Profile} />
      <PrivateRoute exact path="/chat/:id?" component={Chat} />
      <Route exact path="/skills/:skillId" component={SkillPage} />
      <Route exact path="/skills/:skillId/:subskillId" component={SubskillPage} />
      <Route exact path="/search" component={Search} />
    </Switch>
  </Router>
);

export default App;
