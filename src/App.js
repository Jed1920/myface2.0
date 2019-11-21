import React from 'react';
import Navbar from './Navbar';
import { Home } from './Home';
import { Users, SingleUser} from './Users';
import { CreateUser } from './CreateUser';
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
          
          <Route path="/posts">
              <AllPosts/>
          </Route>
          <Route path="/users/create">
              <CreateUser/>
          </Route>
          <Route path="/users/:id">
              <SingleUser/>
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