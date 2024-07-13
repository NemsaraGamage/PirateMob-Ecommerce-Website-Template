import React, { useState } from 'react';
import '../styles.css';
import NavBarHead from "../NavBar";
import FooterNav from "../Footer";
import MiniNav from "../MiniNav"

// npm run deploy

const CommunityPage = () => {

    const communityList = [
        
        { userName: 'RoadBlock15:', msg: 'The recent sale on steam has been saving my wallet.', rate: 'Rating: 4/5', date: '13th June 2023' },
        { userName: 'ElainT:', msg: 'Its time Hi-Rez. Give me back my boy.', rate: 'Rating: 4/5', date: '20th October 2023' },
        { userName: 'DK:', msg: 'There is noting good on sales, a\'int it pointless?', rate: 'Rating: 2/5', date: '2th February 2023' },
        { userName: 'Blank81:', msg: 'Love it when there a sale and im still borke.', rate: 'Rating: 5/5', date: '5th September 2024' },
        { userName: 'StarG:', msg: 'I popped a blood vessel playing these game, I need therapy.', rate: 'Rating: 1/5', date: '18th July 2021' },
        { userName: 'CorpsRed:', msg: 'All these games and I have a potato pc :{', rate: 'Rating: 3/5', date: '30th May 2024' },

    ];

    return (
        <>
            <NavBarHead />
            <MiniNav></MiniNav>

            <h3 className='PageHead'>Community</h3>

            <div className="communityCon">
                <div className="community-container">
                    <div className="community-grid-container">
                        {communityList.map((community, index) => (
                            <div key={index} className="community-grid-item">
                                <p>{community.userName}</p>
                                <p>{community.msg}</p>
                                <p>{community.rate}</p>
                                <p>{community.date}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <FooterNav />
        </>
    );
};

export default CommunityPage;
