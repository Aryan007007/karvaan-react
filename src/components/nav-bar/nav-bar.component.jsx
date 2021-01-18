import React from 'react';

import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo-with-triangle.png'

import './nav-bar.styles.scss';

const NavBar = () => (

    <div className="nav">
        <div className="brick">
            <Link to='/'>Home</Link>
            <Link to='/about-us'>About Us </Link>
            <div><img src={logo} alt="Logo" /></div>
            <Link to='shows'>Shows</Link>
            <Link to='contact-us'>Contact Us</Link>
        </div>
    </div>

)

export default NavBar;