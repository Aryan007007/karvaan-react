import React from 'react';

import NavBar from '../../components/nav-bar/nav-bar.component';
import Header from '../../components/header/header.component';
import Social from '../../components/social/social.component';
import News from '../../components/news/news.component';
import Footer from '../../components/footer/footer.component';


const HomePage = () => (
    <div>
        <Header />
        <Social />
        <News />
        <Footer />
    </div>
)

export default HomePage;