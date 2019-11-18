import React from 'react';
import Navbar from './Navbar';
import { Home } from './Home';
import { allPosts } from './Posts';
import { postLL } from './Posts';
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
            <postLL/>
            <allPosts/>
          </Route>
          <Route path="/users">
            <div>Users</div>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;

