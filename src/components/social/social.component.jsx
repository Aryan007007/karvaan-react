import React from 'react';

import '../social/social.styles.scss';

const Social = () => (
    <section className="social">
        <div className="social-txt">
            <p>Reach out to us on our Social Media outlets</p>
        </div>

        <div className="social-icons">
            <a href="https://www.instagram.com/__karvaan__/"><i className="fa fa-instagram"></i></a>
            <a href="https://www.facebook.com/KARVAANOpenMic/"><i className="fa fa-facebook-f"></i></a>
            <a href="https://www.youtube.com/channel/UCpJS1Wp5pR1toVgsUokkfzg/featured"><i
                className="fa fa-youtube"></i></a>
        </div>
    </section>
)

export default Social;