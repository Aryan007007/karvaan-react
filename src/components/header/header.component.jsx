import React from 'react';

import NavBar from '../nav-bar/nav-bar.component';

import './header.styles.scss';

const Header = () => {

    function preloadImage(url) {
        var img = new Image();
        img.src = url;
    }

    return (
        <div className='header'>
            {() => { preloadImage() }}
            <NavBar accent={'maroon'} />
        </div>
    )

}

export default Header;