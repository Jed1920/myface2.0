import React from 'react';
import './Navbar.scss';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
        <Link className="links" to="/">Home</Link>
        <Link className="links" to="/posts">Posts</Link>
        <Link className="links" to="/users">Users</Link>
    </div>


  );
}

export default Navbar;

