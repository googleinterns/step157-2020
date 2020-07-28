import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';

//Components
import Navbar from './components/navbar';

// Pages
import Home from './pages/Home';
import Explore from './pages/Explore';
import Team from './pages/Team';
import SignIn from './pages/SignIn';


const App = () => (
  <Router>
    <Navbar />
    <Route exact path= "/" component={Home} />
    <Route exact path= "/explore" component={Explore} />
    <Route exact path= "/team" component={Team} />
    <Route exact path= "/signin" component={SignIn} />
  </Router>
);

export default App;
