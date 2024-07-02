import React from "react";
import '../styles.css';
import NavBarHead from "../NavBar";
import FooterNav from "../Footer"
import { useNavigate } from 'react-router-dom';

import logo from '../pics/logo.png'

const MainPage = () => {

    return (
        <>
        {/* Nav bar */}
        <NavBarHead></NavBarHead>

        <div className="logoCon">
            <h3>PirateMob</h3>
            <img src={logo}></img>
        </div>

        </>
    )
}

export default MainPage;