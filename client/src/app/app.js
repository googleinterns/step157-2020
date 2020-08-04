import React from 'react';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Profile from '../features/user-profile/user-profile.js';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/profile/:id?" component={Profile} />
      </Switch>
    </div>
  </Router>
);

export default App;
