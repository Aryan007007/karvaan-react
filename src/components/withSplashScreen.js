import React from 'react';
// import logo from '../assets/images/logo.png';
import { ReactComponent as Logo } from '../assets/images/logo_splash.svg';

import './splash-screen.scss';

function LoadingMessage() {
    return (
        <div className="splash-screen">
            <Logo />
            <div className="loader"></div>
        </div>
    )
}

export default LoadingMessage; 