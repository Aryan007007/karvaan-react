import React from 'react';

import SHOWS_DATA from '../../store/showsData'

import '../shows-showcase/shows-showcase.styles.scss';

class Showcase extends React.Component {
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
            <div className="showcase">
                <div className="limit">
                    <div className="show-img">
                        <div className="one">
                            <img src={karvaan_2.imgUrl1} alt="images" />
                        </div>
                        <div className="one">
                            <img src={karvaan_2.imgUrl2} alt="images" />
                        </div>
                        <div className="one">
                            <img src={karvaan_2.imgUrl3} alt="images" />
                        </div>
                    </div>

                    <div className="show-text">
                        <h2>Karvaan 2.0</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque animi officiis accusamus ex sunt dolores
                        nobis inventore quos explicabo ducimus hic id, iusto itaque architecto doloribus placeat ullam. Molestiae,
                        fugiat.
            </p>
                    </div>
                </div>



                <div className="accordion">


                    <div className="extra">
                        <iframe src="https://www.instagram.com/p/B0ggBVOlAie/embed" width="100%" height="406" frameborder="0"
                            scrolling="no" allowtransparency="true" className="frame-insta"></iframe>
                    </div>

                    <div className="extra">
                        <iframe src="https://www.instagram.com/p/B0gjUQXlYcf/embed" width="100%" height="406" frameborder="0"
                            scrolling="no" allowtransparency="true"></iframe>
                    </div>

                    <div className="extra">
                        <iframe src="https://www.instagram.com/p/B0gkW3DFDRa/embed" width="100%" height="406" frameborder="0"
                            scrolling="no" allowtransparency="true"></iframe>
                    </div>

                    <div className="extra">
                        <iframe src="https://www.instagram.com/p/B0jK0DIF_kh/embed" width="100%" height="406" frameborder="0"
                            scrolling="no" allowtransparency="true"></iframe>
                    </div>
                    <div className="extra">
                        <iframe src="https://www.instagram.com/p/B0gnfbYlKgn/embed" width="100%" height="406" frameborder="0"
                            scrolling="no" allowtransparency="true"></iframe>
                    </div>
                    <div className="extra">
                        <iframe src="https://www.instagram.com/p/B0oTy1Nlbdu/embed" width="100%" height="406" frameborder="0"
                            scrolling="no" allowtransparency="true"></iframe>
                    </div>

                    <div className="extra">
                        <iframe src="https://www.instagram.com/p/B0goTbeFJc4/embed" width="100%" height="406" frameborder="0"
                            scrolling="no" allowtransparency="true"></iframe>
                    </div>
                </div>

                <div className="two fa fa-arrow-down">
                </div>

            </div>

        )
    }
}

export default Showcase;