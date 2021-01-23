import React from 'react';

import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo-with-triangle.png';
import logo_2 from '../../assets/images/logo.png';

import './nav-bar.styles.scss';

class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        var x = document.getElementById("myNav");
        if (x.className === `mainNav ${this.props.accent}`) {
            x.className += " responsive";
        } else {
            x.className = `mainNav ${this.props.accent}`;
        }
    }


    render() {

        return (
            <div className={`mainNav ${this.props.accent}`} id='myNav'>
                <div className="brick">
                    <Link to='/'>Home</Link>
                    <Link to='/about-us'>About Us </Link>
                    <div className='logo-2'><img src={logo_2} alt="logo_2" /></div>
                    <div className='logo'><img src={logo} alt="Logo" /></div>
                    <Link to='shows'>Shows</Link>
                    <Link to='contact-us'>Contact Us</Link>
                    <div className="icon" onClick={() => this.handleClick()}><i className="fa fa-bars"></i></div>
                </div>
            </div>
        )
    }
}

export default NavBar;