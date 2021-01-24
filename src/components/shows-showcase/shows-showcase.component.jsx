import React from 'react';

import '../shows-showcase/shows-showcase.styles.scss';

class Showcase extends React.Component {

    render() {
        const { imgUrl1, imgUrl2, imgUrl3, heading, description } = this.props;
        return (
            <div className="showcase">
                <div className="limit">
                    <div className="show-img">
                        <div className="one">
                            <img src={imgUrl1} alt="images" />
                        </div>
                        <div className="one">
                            <img src={imgUrl2} alt="images" />
                        </div>
                        <div className="one">
                            <img src={imgUrl3} alt="images" />
                        </div>
                    </div>

                    <div className="show-text">
                        <h2>{heading}</h2>
                        <p>{description}</p>
                    </div>
                </div>



                <div className="accordion">


                    <div className="extra">
                        <iframe src="https://www.instagram.com/p/B0ggBVOlAie/embed" width="100%" height="406" frameBorder="0"
                            scrolling="no" allowtransparency="true" className="frame-insta"></iframe>
                    </div>

                    <div className="extra">
                        <iframe src="https://www.instagram.com/p/B0gjUQXlYcf/embed" width="100%" height="406" frameBorder="0"
                            scrolling="no" allowtransparency="true"></iframe>
                    </div>

                    <div className="extra">
                        <iframe src="https://www.instagram.com/p/B0gkW3DFDRa/embed" width="100%" height="406" frameBorder="0"
                            scrolling="no" allowtransparency="true"></iframe>
                    </div>

                    <div className="extra">
                        <iframe src="https://www.instagram.com/p/B0jK0DIF_kh/embed" width="100%" height="406" frameBorder="0"
                            scrolling="no" allowtransparency="true"></iframe>
                    </div>
                    <div className="extra">
                        <iframe src="https://www.instagram.com/p/B0gnfbYlKgn/embed" width="100%" height="406" frameBorder="0"
                            scrolling="no" allowtransparency="true"></iframe>
                    </div>
                    <div className="extra">
                        <iframe src="https://www.instagram.com/p/B0oTy1Nlbdu/embed" width="100%" height="406" frameBorder="0"
                            scrolling="no" allowtransparency="true"></iframe>
                    </div>

                    <div className="extra">
                        <iframe src="https://www.instagram.com/p/B0goTbeFJc4/embed" width="100%" height="406" frameBorder="0"
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