import React from 'react';

import SHOWS_DATA from '../../store/showsData'

import NavBar from '../../components/nav-bar/nav-bar.component';
import Showcase from '../../components/shows-showcase/shows-showcase.component';
import Footer from '../../components/footer/footer.component';

import '../shows/showsPage.styles.scss';

class ShowsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            karvaan_1: SHOWS_DATA.karvaan1_0,
            karvaan_2: SHOWS_DATA.karvaan2_0
        }

    }
    render() {

        const { karvaan_1, karvaan_2 } = this.state;

        return (
            <div className='bgBrown'>
                <NavBar accent={'purple'} />
                <div className="shows">
                    <Showcase {...karvaan_2} />
                    <Showcase {...karvaan_1} />
                </div>
                <Footer />
            </div>
        )
    }
}

export default ShowsPage;