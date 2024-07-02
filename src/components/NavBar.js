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
        <div className="genre-dropdown">
          <Link to="#" className="nav-link">Catagories</Link>
          <div className="dropdown-menu">
            <Link to="/comedy" className="dropdown-item">Comedy</Link>
            <Link to="#" className="dropdown-item">Horror</Link>
            <Link to="#" className="dropdown-item">RPG</Link>
            <Link to="#" className="dropdown-item">Adventure</Link>
            <Link to="#" className="dropdown-item">Action</Link>
            <Link to="#" className="dropdown-item">Thriller</Link>
            <Link to="#" className="dropdown-item">Mystery</Link>
            <Link to="#" className="dropdown-item">Family</Link>
            <Link to="#" className="dropdown-item">War</Link>
          </div>
        </div>
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