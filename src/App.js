import React from 'react';
import Navbar from './Navbar';
import { Home } from './Home';
import { Users } from './Users';
import { AllPosts } from './AllPost';

import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Navbar/>
        <Switch>
          {/* <Route path="/posts/:id">
              <IndivPostMain/>
          </Route> */}
          <Route path="/posts">
              <AllPosts/>
          </Route>
          <Route path="/users">
            <Users/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;