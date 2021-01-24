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
            karvaan_2: SHOWS_DATA.karvaan2_0,
            karvaan_3: SHOWS_DATA.karvaan3_0,
            karvaan_4: SHOWS_DATA.karvaan4_0,
            karvaan_5: SHOWS_DATA.karvaan5_0,
            karvaan_6: SHOWS_DATA.karvaan6_0,
            karvaan_7: SHOWS_DATA.karvaan7_0,
            karvaan_8: SHOWS_DATA.karvaan8_0
        }

    }
    render() {

        const { karvaan_1, karvaan_2, karvaan_3, karvaan_4, karvaan_5, karvaan_6, karvaan_7, karvaan_8 } = this.state;

        return (
            <div className='bgBrown'>
                <NavBar accent={'purple'} />
                <div className="shows">
                    <Showcase {...karvaan_8} />
                    <Showcase {...karvaan_7} />
                    <Showcase {...karvaan_6} />
                    <Showcase {...karvaan_5} />
                    <Showcase {...karvaan_4} />
                    <Showcase {...karvaan_3} />
                    <Showcase {...karvaan_2} />
                    <Showcase {...karvaan_1} />
                </div>
                <Footer />
            </div>
        )
    }
}

export default ShowsPage;