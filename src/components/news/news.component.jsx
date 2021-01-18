import React from 'react';

import '../news/news.styles.scss';

const News = () => (

    <section className="container">
        <div className="news-heading">
            <h1>News</h1>
        </div>
        <div className="news-tab">
            <div className="card-n">
                <img src="https://drive.google.com/uc?export=view&id=1xYD5LHLY80c9cCNN3x2emy3CZNN0abF5" alt="" />
                <h1>News Heading</h1>
                <a href="#" className="btn">Read More</a>
            </div>

            <div className="card-n">
                <img src="https://drive.google.com/uc?export=view&id=1vLxGawdxRcjfhlXa6PFHADpgBHq7KULS" alt="" />
                <h1>News Heading</h1>
                <a href="#" className="btn">Read More</a>
            </div>

            <div className="card-n">
                <img src="https://drive.google.com/uc?export=view&id=1l9l_GLlc48qKJxKE02JHo-IVrhEPbmfe" alt="" />
                <h1>News Heading</h1>
                <a href="#" className="btn">Read More</a>
            </div>
        </div>
    </section>
)

export default News;