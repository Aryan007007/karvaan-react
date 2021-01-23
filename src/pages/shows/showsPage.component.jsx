import React from 'react';

import NavBar from '../../components/nav-bar/nav-bar.component';
import Showcase from '../../components/shows-showcase/shows-showcase.component';
import Footer from '../../components/footer/footer.component';

import '../shows/showsPage.styles.scss';

const ShowsPage = () => (
    <div>
        <NavBar accent={'purple'} />
        <div className="shows">
            <Showcase />
            <Showcase />
        </div>
        <Footer />
    </div>
)

export default ShowsPage;