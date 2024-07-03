import React from 'react';
import { Link } from 'react-router-dom';
import '../components/styles.css';


// npm run deploy

const NavBar = () => {
  return (
    <>
    <div className="navbar">
      <Link to="/" className="logo">PirateMob</Link>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/" className="nav-link">About</Link>
        <Link to="/toppicks" className="nav-link">Community</Link>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
    </div>
    </>
  );
}

export default NavBar;