import React, { useState } from 'react';
import '../styles.css';
import NavBarHead from "../NavBar";
import FooterNav from "../Footer";
import MiniNav from "../MiniNav"

import a1 from '../pics/addOn/1.jpg'
import a2 from '../pics/addOn/1.2.jpg'
import a3 from '../pics/addOn/2.jpg'
import a4 from '../pics/addOn/2.2.jpg'
import a5 from '../pics/addOn/3.jpg'
import a6 from '../pics/addOn/3.2.jpg'
import a7 from '../pics/addOn/4.jpg'
import a8 from '../pics/addOn/4.2.jpg'

// npm run deploy

const AddOn = () => {

    const addOnList = [
        
        { img1: a1, img2: a2 , Name: 'FallOut 4: Game of the Year Edition', msg: 'Includes 7 items: Fallout 4, Fallout 4 - Automatron, Fallout 4 - Wasteland Workshop, Fallout 4 Far Harbor, Fallout 4 - Contraptions Workshop, Fallout 4 Vault-Tec Workshop, Fallout 4 Nuka-World', price: '$4.00' },
        { img1: a4, img2: a3 , Name: 'Ghost of Tsushima DIRECTOR\'S CUT', msg: 'New content, missions and items with all new experience.', price: '$17.00' },
        { img1: a5, img2: a6 , Name: 'Destiny 2: The Final Shape + Annual Pass', msg: 'The Annual Pass edition includes The Final Shape story campaign, new destination, three new Supers, new weapons and armor to collect, The Final Shape Dungeon Key, catalyst and ornament for the new and instantly unlocked Tessellation Exotic Fusion Rifle, one Secret Stash delivered during each Episode, an Exotic Sparrow, and three Episodes in the year of The Final Shape.', price: '$24.99' },
        { img1: a7, img2: a8 , Name: 'Stardew Valley Soundtrack', msg: 'The original soundtrack to Stardew Valley, composed by ConcernedApe (Eric Barone). This soundtrack is fully up to date, and includes 91 tracks. Provided in mp3 format.', price: '$1.47' },

    ];

    return (
        <>
            <NavBarHead />
            <MiniNav></MiniNav>

            <h3 className='PageHead'>Add On's</h3>

            <div className="addOnCon">
                <div className="addOn-container">
                    <div className="addOn-grid-container">
                        {addOnList.map((addOn, index) => (
                            <div key={index} className="addOn-grid-item">
                                
                                <div className='addOnImg'>
                                    <img src={addOn.img1}></img>
                                    <img src={addOn.img2}></img>
                                </div>

                                <p>{addOn.Name}</p>
                                <p>{addOn.msg}</p>
                                <button>Add Cart</button>
                                
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <FooterNav />
        </>
    );
};

export default AddOn;
