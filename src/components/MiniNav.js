import React, { useState } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

import logo from './pics/logo.png';
import cartLogo from './pics/cartLogo2.png';
import 'react-multi-carousel/lib/styles.css';

// npm run deploy

const MiniNav = () => {

    return (
        <>
            <div className="logoCon">
                <h3>PirateMob</h3>
                <img src={logo} alt="Logo" />
            </div>

            {/* mini navbar */}
            <div className="miniNavBarCon">
                <div className="miniNavBar">
                    <div className="miniNav-links">
                        <Link to="/MainPage" className="miniNav-link">Home</Link>
                        <div className="miniGenre-dropdown">
                            <Link to="#" className="miniNav-link">Categories</Link>
                            <div className="miniDropdown-menu">
                                <Link to="/CategoryPage" className="miniDropdown-item">Comedy</Link>
                                <Link to="/CategoryPage" className="miniDropdown-item">Horror</Link>
                                <Link to="/CategoryPage" className="miniDropdown-item">RPG</Link>
                                <Link to="/CategoryPage" className="miniDropdown-item">Adventure</Link>
                                <Link to="/CategoryPage" className="miniDropdown-item">Action</Link>
                                <Link to="/CategoryPage" className="miniDropdown-item">Thriller</Link>
                                <Link to="/CategoryPage" className="miniDropdown-item">Mystery</Link>
                                <Link to="/CategoryPage" className="miniDropdown-item">Family</Link>
                                <Link to="/CategoryPage" className="miniDropdown-item">War</Link>
                            </div>
                        </div>
                        <Link to="/CommunityPage" className="miniNav-link">Community</Link>
                        <Link to="/Addon" className="miniNav-link">Add On</Link>
                    </div>
                    <div className="miniSearch-bar">
                        <input type="text" placeholder="Search..." />
                        <img src={cartLogo} alt="Cart Logo" />
                    </div>
                </div>
            </div>

        </>
    );
};

export default MiniNav;
