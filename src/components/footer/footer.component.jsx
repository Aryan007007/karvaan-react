import React from 'react';
import { Link } from 'react-router-dom';

import '../footer/footer.styles.scss';

const Footer = () => (
    <footer>
        <p>Karvaan pvt. ltd. &copy; 2018</p>
        <br />
        <div className="social-icons">
            <a href="https://www.instagram.com/__karvaan__/"><i className="fa fa-instagram"></i></a>
            <a href="https://www.facebook.com/KARVAANOpenMic/"><i className="fa fa-facebook-f"></i></a>
            <a href="https://www.youtube.com/channel/UCpJS1Wp5pR1toVgsUokkfzg/featured"><i
                className="fa fa-youtube"></i></a>
        </div>
        <br />
        <p>Contact<br />Gaurav : 8457057497</p>
        <br />
        <p>Useful Links -</p>
        <br />
        <p>
            <Link to='/cms'>
                Content Management
            </Link>
        </p>
        <div className='navLinks'>
            <Link to='/'>Home</Link>
            <Link to='/about-us'>About-Us</Link>
            <Link to='/shows'>Shows</Link>
            <Link to='/contact-us'>Contact-Us</Link>
        </div>
        <br />
        <br />
        <p><Link to='/book-tickets'>Book Now</Link></p>


    </footer>
)

export default Footer;