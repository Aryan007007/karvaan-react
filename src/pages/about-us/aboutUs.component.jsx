import React from 'react';

import NavBar from '../../components/nav-bar/nav-bar.component';
import AboutText from '../../components/about-txt/about-txt.component';
import Team from '../../components/team/team.component';
import Footer from '../../components/footer/footer.component';

import '../about-us/aboutUs.styles.scss';

const AboutUsPage = () => (
    <div>
        <NavBar accent={'blue'} />
        <div className="wrapper">
            <AboutText />
            <Team />
        </div>
        <Footer />
    </div>
)

export default AboutUsPage;