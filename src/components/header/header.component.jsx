import React from 'react';

import NavBar from '../nav-bar/nav-bar.component';

import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <NavBar accent={'maroon'} />
    </div>
)

export default Header;