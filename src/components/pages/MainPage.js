import React, { useState } from 'react';
import '../styles.css';
import NavBarHead from "../NavBar";
import FooterNav from "../Footer";
import { Link } from 'react-router-dom';
import MiniNav from "../MiniNav"

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

import s1 from '../pics/gameLis/s1.jpg';
import s2 from '../pics/gameLis/s2.jpg';
import s3 from '../pics/gameLis/s3.jpg';
import s4 from '../pics/gameLis/s4.jpg';
import s5 from '../pics/gameLis/s5.jpg';
import s6 from '../pics/gameLis/s6.jpg';
import s7 from '../pics/gameLis/s7.jpg';
import s8 from '../pics/gameLis/s8.jpg';
import s9 from '../pics/gameLis/s9.jpg';
import s10 from '../pics/gameLis/s10.jpg';

import giftBox from '../pics/g3.png';

import f1 from '../pics/gameLis/f1.jpg';
import f2 from '../pics/gameLis/f2.jpeg';
import f3 from '../pics/gameLis/f3.jpg';

import ban1 from '../pics/ban1.jpg';

import cataCar1 from '../pics/cata/1.jpg';
import cataCar2 from '../pics/cata/2.jpg';
import cataCar3 from '../pics/cata/3.jpg';
import cataCar4 from '../pics/cata/4.jpg';
import cataCar5 from '../pics/cata/5.jpg';
import cataCar6 from '../pics/cata/6.jpg';
import cataCar7 from '../pics/cata/7.jpg';

// npm run deploy

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
        { gameImg: cL1, desName: 'Assassin Creed Valhalla', name: 'Assassins Creed Valhalla', cata: 'Action-Adventure-RPG', price: '$24.00' },
        { gameImg: cL2, desName: 'Ghost of Tsushima', name: 'Ghost of Tsushima', cata: 'Action-Adventure-Open World', price: '$60.99' },
        { gameImg: cL3, desName: 'Fallout 4', name: 'Fallout 4', cata: 'Sci-fi-Open World-RPG', price: '$5.00' },
        { gameImg: cL4, desName: 'Red Dead Redemption 2', name: 'Red Dead Redemption 2', cata: 'Action-Adventure-Open World', price: '$53.00' },
        { gameImg: cL5, desName: 'Uncharted 4: A Thiefs End', name: 'Uncharted 4: A Thiefs End', cata: 'Action-Adventure-Story', price: '$6.00' },
        { gameImg: cL6, desName: 'Watch Dogs: Legion', name: 'Watch Dogs: Legion', cata: 'Action-Adventure-Open World', price: '$2.00' },
    ];

    const salesList = [
        { gameImg: s1, desName: 'Grand Theft Auto 5', name: 'Grand Theft Auto 5', cata: 'Action-Adventure-Crime', price: '$10.00', salePrice: '$4.25' },
        { gameImg: s2, desName: 'Monster Hunter', name: 'Monster Hunter', cata: 'Action-RPG-Monster', price: '$14.99', salePrice: '$8.36' },
        { gameImg: s3, desName: 'Hitman 3', name: 'Hitman 3', cata: 'Action-Stealth-Singleplayer', price: '$25.00', salePrice: '$6.22' },
        { gameImg: s4, desName: 'Days Gone', name: 'Days Gone', cata: 'Open World-Zombies-Survival', price: '$11.00', salePrice: '$7.66' },
        { gameImg: s5, desName: 'FarCry 6', name: 'FarCry 6', cata: 'Action-Adventure-RPG', price: '$8.00', salePrice: '$3.99' },
        { gameImg: s6, desName: 'Horizon Forbidden West', name: 'Horizon Forbidden West', cata: 'Action-Adventure-Open World', price: '$44.00', salePrice: '$23.99' },
        { gameImg: s7, desName: 'God of War Ragnarök', name: 'God of War Ragnarök', cata: 'Action-Adventure-Story', price: '$64.00', salePrice: '$50.00' },
        { gameImg: s8, desName: 'Assassins Creed Odyssey', name: 'Assassins Creed Odyssey', cata: 'Action-Adventure-RPG', price: '$23.00', salePrice: '$14.00' },
        { gameImg: s9, desName: 'Sekiro: Shadows Die Twice', name: 'Sekiro: Shadows Die Twice', cata: 'Action-Story-Souls Like', price: '$14.00', salePrice: '$8.33' },
        { gameImg: s10, desName: 'Spiderman Remastered ', name: 'Spiderman Remastered ', cata: 'Action-Story-Adventure', price: '$55.00', salePrice: '$42.20' },
    ];

    const freeGames = [
        { gameImg: f1, desName: 'Devil May Cry 5', name: 'Devil May Cry 5', cata: 'Action-Adventure-RPG', price: '$25.00', salePrice: 'Free' },
        { gameImg: f3, desName: 'Fallout 76', name: 'Fallout 76', cata: 'Adventure-Open World-RPG', price: '$8.00', salePrice: 'Free' },
        { gameImg: f2, desName: 'Stardew Valley', name: 'Stardew Valley', cata: 'Adventure-Farming Sim-Story', price: '$4.85', salePrice: 'Free' },
    ];

    const cataCar = [
        { cardImg: cataCar1 },
        { cardImg: cataCar2 },
        { cardImg: cataCar3 },
        { cardImg: cataCar4 },
        { cardImg: cataCar5 },
        { cardImg: cataCar6 },
        { cardImg: cataCar7 },
    ];

    const addToCart = (game) => {
        setCart([...cart, game]);
        console.log('Game added to cart:', game);
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
            breakpoint: { max: 590, min: 0 },
            items: 1
        }
    };

    return (
        <>
            <NavBarHead />
            <MiniNav></MiniNav>

            {/* 1st game list */}
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
                <h3>OUR FAVORITES</h3>
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

            {/* banner 1 */}
            <div className='ban1Con'>
                <img src={ban1}></img>
            </div>

            {/* discount list */}
            <h3 className='salesHead'>ON SALE</h3>
            <div className="gameCon">
                <div className="game-container">
                    <div className="game-grid-container">
                        {salesList.map((game, index) => (
                            <div key={index} className="game-grid-item dis-item">
                                <img src={game.gameImg} alt={game.desName} />
                                <p>{game.name}</p>
                                <p>{game.cata}</p>
                                <div className="price-button-container salePriceCon">
                                    <p>{game.price}</p>
                                    <p>{game.salePrice}</p>
                                    <button onClick={() => addToCart(game)}>Add Cart</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Category */}
            <div className='carouselCon cataCarousel'>
                <h3>Category</h3>
                <Carousel responsive={responsive}>
                    {cataCar.map((game, index) => (
                        <div key={index} className="carousel-item cataCarousel-item">
                            <img src={game.cardImg} />
                        </div>
                    ))}
                </Carousel>
            </div>

             {/* giftbox */}
             <div className='giftHeadCon'>
                <h3 className='giftHead'>Free Week</h3>
                <img src={giftBox}></img>
             </div>
             <div className="freegameCon">
                <div className="freegame-container">
                    <div className="freegame-grid-container">
                        {freeGames.map((game, index) => (
                            <div key={index} className="freegame-grid-item">
                                <img src={game.gameImg} alt={game.desName} />
                                <p>{game.name}</p>
                                <p>{game.cata}</p>
                                <div className="freegame-button-container">
                                    <p>{game.price}</p>
                                    <p>{game.salePrice}</p>
                                    <button onClick={() => addToCart(game)}>Add Cart</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <FooterNav />
        </>
    );
};

export default MainPage;
