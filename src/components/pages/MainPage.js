import React, { useState, useEffect } from 'react';
import '../styles.css';
import NavBarHead from "../NavBar";
import FooterNav from "../Footer"
import { useNavigate, Link } from 'react-router-dom';

import logo from '../pics/logo.png'
import p1 from '../pics/p1c.jpg'

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const MainPage = () => {

    return (
        <>
        {/* Nav bar */}
        <NavBarHead></NavBarHead>

        <div className="logoCon">
            <h3>PirateMob</h3>
            <img src={logo}></img>
        </div>

        <div className="miniNavBarCon">
            <div className="miniNavBar">
                <div className="miniNav-links">
                    <Link to="/" className="miniNav-link">Home</Link>
                    <div className="miniGenre-dropdown">
                    <Link to="#" className="miniNav-link">Catagories</Link>
                        <div className="miniDropdown-menu">
                            <Link to="/comedy" className="miniDropdown-item">Comedy</Link>
                            <Link to="#" className="miniDropdown-item">Horror</Link>
                            <Link to="#" className="miniDropdown-item">RPG</Link>
                            <Link to="#" className="miniDropdown-item">Adventure</Link>
                            <Link to="#" className="miniDropdown-item">Action</Link>
                            <Link to="#" className="miniDropdown-item">Thriller</Link>
                            <Link to="#" className="miniDropdown-item">Mystery</Link>
                            <Link to="#" className="miniDropdown-item">Family</Link>
                            <Link to="#" className="miniDropdown-item">War</Link>
                        </div>
                    </div>
                    <Link to="/toppicks" className="miniNav-link">Community</Link>
                    <Link to="/toppicks" className="miniNav-link">News</Link>
                    <Link to="/toppicks" className="miniNav-link">Add On</Link>
                </div>
                <div className="miniSearch-bar">
                    <input type="text" placeholder="Search..." />
                </div>
            </div>
        </div>


        </>
    )
}

export default MainPage;