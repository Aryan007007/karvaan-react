import React from 'react';

import logo from '../../assets/images/logo-with-triangle.png'

import './nav-bar.styles.scss';

const NavBar = () => (

    <div className="nav">
        <div className="brick">
            <a href="home1.html">Home</a>
            <a href="about.html">About Us</a>
            <div><img src={logo} alt="Logo" /></div>
            <a href="shows.html">Shows</a>
            <a href="contact.html">Contact Us</a>
        </div>
    </div>

)

export default NavBar;