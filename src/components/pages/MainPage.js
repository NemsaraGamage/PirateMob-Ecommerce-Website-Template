import React, { useState } from 'react';
import '../styles.css';
import NavBarHead from "../NavBar";
import FooterNav from "../Footer";
import { Link } from 'react-router-dom';

import logo from '../pics/logo.png';

import gL1 from '../pics/gameLis/1.jpg';
import gL2 from '../pics/gameLis/2.jpg';
import gL3 from '../pics/gameLis/3.jpg';
import gL5 from '../pics/gameLis/5.jpg';
import gL6 from '../pics/gameLis/6.jpg';

import cartLogo from '../pics/cartLogo2.png';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import cL1 from '../pics/gameLis/c1.jpg';
import cL2 from '../pics/gameLis/c2.jpg';
import cL3 from '../pics/gameLis/c3.jpg';
import cL4 from '../pics/gameLis/c4.jpg';
import cL5 from '../pics/gameLis/c5.jpg';
import cL6 from '../pics/gameLis/c6.jpg';

const MainPage = () => {
    const [cart, setCart] = useState([]);

    const gameList1 = [
        { gameImg: gL1, desName: 'Hogwarts Legacy', name: 'Hogwarts Legacy', cata: 'Action-Adventure-RPG', price: '$20.00' },
        { gameImg: gL2, desName: 'ELDEN RING', name: 'ELDEN RING', cata: 'Solus like-Open World-RPG', price: '$14.99' },
        { gameImg: gL3, desName: 'Cyberpunk 2077', name: 'Cyberpunk 2077', cata: 'Sci-fi-Open World-RPG', price: '$25.00' },
        { gameImg: gL5, desName: 'Star Wars Jedi: Survivor', name: 'Star Wars Jedi: Survivor', cata: 'Action-Adventure-Solus like', price: '$13.00' },
        { gameImg: gL6, desName: 'The Witcher 3: Wild Hunt', name: 'The Witcher 3', cata: 'Action-Adventure-RPG', price: '$3.00' },
    ];

    const caroList1 = [
        { gameImg: cL1, desName: 'Assassin Creed Valhalla', name: 'Assassins Creed Valhalla', cata: 'Action-Adventure-RPG', price: '$20.00' },
        { gameImg: cL2, desName: 'Ghost of Tsushima', name: 'Ghost of Tsushima', cata: 'Action-Adventure-Open World', price: '$14.99' },
        { gameImg: cL3, desName: 'Fallout 4', name: 'Fallout 4', cata: 'Sci-fi-Open World-RPG', price: '$25.00' },
        { gameImg: cL4, desName: 'Red Dead Redemption 2', name: 'Red Dead Redemption 2', cata: 'Action-Adventure-Open World', price: '$13.00' },
        { gameImg: cL5, desName: 'Uncharted 4: A Thiefs End', name: 'Uncharted 4: A Thiefs End', cata: 'Action-Adventure-Story', price: '$3.00' },
        { gameImg: cL6, desName: 'Watch Dogs: Legion', name: 'Watch Dogs: Legion', cata: 'Action-Adventure-Open World', price: '$3.00' },
    ];

    const addToCart = (game) => {
        setCart([...cart, game]);
        console.log('it worked')
    };

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <>
            <NavBarHead />
            <div className="logoCon">
                <h3>PirateMob</h3>
                <img src={logo} alt="Logo" />
            </div>

            <div className="miniNavBarCon">
                <div className="miniNavBar">
                    <div className="miniNav-links">
                        <Link to="/" className="miniNav-link">Home</Link>
                        <div className="miniGenre-dropdown">
                            <Link to="#" className="miniNav-link">Categories</Link>
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
                        <img src={cartLogo} alt="Cart Logo" />
                    </div>
                </div>
            </div>

            <div className="gameCon">
                <div className="game-container">
                    <div className="game-grid-container">
                        {gameList1.map((game, index) => (
                            <div key={index} className="game-grid-item">
                                <img src={game.gameImg} alt={game.desName} />
                                <p>{game.name}</p>
                                <p>{game.cata}</p>
                                <div className="price-button-container">
                                    <p>{game.price}</p>
                                    <button onClick={() => addToCart(game)}>Add Cart</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Carousel */}

            <div className='carouselCon'>
                <Carousel responsive={responsive}>
                    {caroList1.map((game, index) => (
                        <div key={index} className="carousel-item">
                            <img src={game.gameImg} alt={game.desName} />
                            <p>{game.name}</p>
                            <p>{game.cata}</p>
                            <div className="caroPrice-button-container">
                                <p>{game.price}</p>
                                <button onClick={() => addToCart(game)}>Add Cart</button>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>

            <FooterNav />
        </>
    );
};

export default MainPage;
