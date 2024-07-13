import React, { useState } from 'react';
import '../styles.css';
import NavBarHead from "../NavBar";
import FooterNav from "../Footer";
import MiniNav from "../MiniNav"

import cgL1 from '../pics/gameLis/1.jpg';
import cgL2 from '../pics/gameLis/2.jpg';
import cgL3 from '../pics/gameLis/3.jpg';
import cgL5 from '../pics/gameLis/5.jpg';
import cgL6 from '../pics/gameLis/6.jpg';

import cgL7 from '../pics/gameLis/7.jpg';
import cgL8 from '../pics/gameLis/8.jpg';
import cgL9 from '../pics/gameLis/9.jpg';
import cgL10 from '../pics/gameLis/10.jpg';
import cgL11 from '../pics/gameLis/11.jpg';

import cgL12 from '../pics/gameLis/12.jpg';
import cgL13 from '../pics/gameLis/13.jpg';
import cgL14 from '../pics/gameLis/14.jpg';
import cgL15 from '../pics/gameLis/15.jpg';
import cgL16 from '../pics/gameLis/16.jpg';

import cgL17 from '../pics/gameLis/17.jpg';
import cgL18 from '../pics/gameLis/18.jpg';
import cgL19 from '../pics/gameLis/19.jpg';
import cgL20 from '../pics/gameLis/20.jpg';
import cgL21 from '../pics/gameLis/21.jpg';

// npm run deploy

const CategoryPage = () => {
    const [cart, setCart] = useState([]);

    const cataGameList = [
        
        { gameImg: cgL7, desName: 'Ghost of Tsushima', name: 'Ghost of Tsushima', cata: 'Action-Adventure-RPG', price: '$59.99' },
        { gameImg: cgL8, desName: 'Counter-Strike 2', name: 'Counter-Strike 2', cata: 'Action-Multiplayer-Shooter', price: 'Free' },
        { gameImg: cgL9, desName: 'Grand Theft Auto V', name: 'Grand Theft Auto V', cata: 'Action-Adventure-RPG', price: '$5.99' },
        { gameImg: cgL10, desName: 'Apex Legends', name: 'Apex Legends', cata: 'Action-Multiplayer-Shooter', price: 'Free' },
        { gameImg: cgL11, desName: 'Palworld', name: 'Palworld', cata: 'Action-Adventure-RPG', price: '$7.55' },

        { gameImg: cgL12, desName: 'Forza Horizon 5', name: 'Forza Horizon 5', cata: 'Action-Adventure-RPG', price: '$9.55' },
        { gameImg: cgL13, desName: 'Red Dead Redemption 2', name: 'Red Dead Redemption 2', cata: 'Action-Adventure-RPG', price: '$40.00' },
        { gameImg: cgL14, desName: 'Dont Starve Together', name: 'Dont Starve Together', cata: 'Action-Adventure-Survival', price: '$3.20' },
        { gameImg: cgL15, desName: 'Fallout 4', name: 'Fallout 4', cata: 'Action-Adventure-RPG', price: '$4.20' },
        { gameImg: cgL16, desName: 'Dark Souls III', name: 'Dark Souls III', cata: 'Action-Adventure-RPG', price: '$1.20' },

        { gameImg: cgL17, desName: 'Subnautica', name: 'Subnautica', cata: 'Action-Adventure-Survival', price: '$2.55' },
        { gameImg: cgL18, desName: 'God of War Ragnarök', name: 'God of War Ragnarök', cata: 'Action-Adventure-Story', price: '$59.99' },
        { gameImg: cgL19, desName: 'The last of us I', name: 'The last of us I', cata: 'Action-Adventure-Story', price: '$39.99' },
        { gameImg: cgL20, desName: 'Rise of the Tomb Raider', name: 'Rise of the Tomb Raider', cata: 'Action-Adventure-Story', price: '$3.22' },
        { gameImg: cgL21, desName: 'Marvel’s Spider-Man 2', name: 'Marvel’s Spider-Man 2', cata: 'Action-Adventure-Story', price: '$42.22' },

        { gameImg: cgL1, desName: 'Hogwarts Legacy', name: 'Hogwarts Legacy', cata: 'Action-Adventure-RPG', price: '$20.00' },
        { gameImg: cgL2, desName: 'ELDEN RING', name: 'ELDEN RING', cata: 'Solus like-Open World-RPG', price: '$14.99' },
        { gameImg: cgL3, desName: 'Cyberpunk 2077', name: 'Cyberpunk 2077', cata: 'Sci-fi-Open World-RPG', price: '$25.00' },
        { gameImg: cgL5, desName: 'Star Wars Jedi: Survivor', name: 'Star Wars Jedi: Survivor', cata: 'Action-Adventure-Solus like', price: '$13.00' },
        { gameImg: cgL6, desName: 'The Witcher 3: Wild Hunt', name: 'The Witcher 3', cata: 'Action-Adventure-RPG', price: '$3.00' },
    ];

    const addToCart = (game) => {
        setCart([...cart, game]);
        console.log('Game added to cart:', game);
    };


    return (
        <>
            <NavBarHead />
            <MiniNav></MiniNav>

            <h3 className='PageHead'>Category</h3>

            <div className="gameCon">
                <div className="game-container">
                    <div className="game-grid-container">
                        {cataGameList.map((game, index) => (
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

            <FooterNav />
        </>
    );
};

export default CategoryPage;
