import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
  return(
    <nav className="navbar">
      <h3 className="logo">SECONONU</h3>
      <ul className="nav-links">
    <Link to="/" className="home">
      <li>Home</li>
    </Link>
    <Link to="/" className="about">
      <li>About</li>
    </Link>
      </ul>

    </nav>
  )
} 

export default Navbar;