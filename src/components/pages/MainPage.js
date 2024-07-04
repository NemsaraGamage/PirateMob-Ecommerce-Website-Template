import React, { useState, useEffect } from 'react';
import '../styles.css';
import NavBarHead from "../NavBar";
import FooterNav from "../Footer"
import { useNavigate, Link } from 'react-router-dom';

import logo from '../pics/logo.png'
import p1 from '../pics/p1c.jpg'

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import gL1 from '../pics/gameLis/1.jpg'
import gL2 from '../pics/gameLis/2.jpg'
import gL3 from '../pics/gameLis/3.jpg'
import gL4 from '../pics/gameLis/4.jpg'
import gL5 from '../pics/gameLis/5.jpg'
import gL6 from '../pics/gameLis/6.jpg'

const MainPage = () => {

    const gameist1= [
        { gameImg : gL1, desName: 'Hogwarts Legacy' , name: 'Hogwarts Legacy', cata: 'Action-Adventure-RPG', price: '$20.00' },
        { gameImg : gL2, desName: 'ELDEN RING' , name: 'ELDEN RING', cata: 'Solus like-Open World-RPG', price: '$14.99' },
        { gameImg : gL3, desName: 'Cyberpunk 2077' , name: 'Cyberpunk 2077', cata: 'Sci-fi-Open World-RPG', price: '$25.00' },
        { gameImg : gL5, desName: 'Star Wars Jedi: Survivor' , name: 'Star Wars Jedi: Survivor', cata: 'Action-Adventure-Solus like', price: '$13.00' },
        { gameImg : gL6, desName: 'The Witcher 3: Wild Hunt' , name: 'The Witcher 3', cata: 'Action-Adventure-RPG', price: '$3.00' },
    ]

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

        <div className="gameCon">
            <div className="game-container">
                <div className="game-grid-container">
                    {gameist1.map((game, index) => (
                        <div key={index} className="game-grid-item">
                            <img src={game.gameImg} alt={game.desName} />
                            <p>{game.name}</p>
                            <p>{game.cata}</p>
                            <div className="price-button-container">
                                <p>{game.price}</p>
                                <button>Add Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        </>
    )
}

export default MainPage;