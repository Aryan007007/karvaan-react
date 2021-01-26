import React from 'react';

import '../contact-social/contact-social.styles.scss';

class ContactSocial extends React.Component {

    render() {
        return (
            <div className='social-showcase'>
                <section className='insta'>
                    <img src="https://drive.google.com/uc?export=view&id=1pMAP4X8L711-QLDjdL8YI7g3EnwbCtL5" alt="Instagram" />
                    <div className="overlay insta">
                        <div className='follow-text'><a target='_blank' href="https://www.instagram.com/__karvaan__/">Follow Us on Instagram <br /><i className="fa fa-instagram"></i>/__karvaan__</a> </div>
                    </div>
                </section>
                <section className='fb'>
                    <img src="https://drive.google.com/uc?export=view&id=1SixsgtVVfKd0_tD4h5uBMqq8TP3zRrGL" alt="Facebook" />
                    <div className="overlay fb">
                        <div className='follow-text'><a target='_blank' href="https://www.facebook.com/KARVAANOpenMic/">Follow Us on Facebook <br /><i className="fa fa-facebook"></i>/__karvaan__</a></div>
                    </div>
                </section>
                <section className='yt'>
                    <img src="https://drive.google.com/uc?export=view&id=1os34q2KjkPzdqGY3ec_BjJOKVhssOv3Z" alt="Youtube" />
                    <div className="overlay yt">
                        <div className='follow-text'><a target='_blank' href="https://www.youtube.com/channel/UCpJS1Wp5pR1toVgsUokkfzg/featured">
                            Follow Us on
                            Youtube <br /><i className="fa fa-youtube"></i>
                        /KARVAAN</a> </div>
                    </div>
                </section>
            </div>
        )
    }
}


export default ContactSocial;