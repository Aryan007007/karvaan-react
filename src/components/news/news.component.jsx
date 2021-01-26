import React from 'react';

import '../news/news.styles.scss';

class News extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(i) {
        var btn = document.getElementsByClassName('read-more');

        if (btn[i].parentElement.className === 'card-n') {
            btn[i].parentElement.className = 'expanded';
            btn[i].innerHTML = "&times;"

        }
        else {
            btn[i].parentElement.className = 'card-n';
            btn[i].innerHTML = 'Read More';
        }
    }

    render() {
        return (
            <div className="container">
                <div className="news-heading">
                    <h1>News</h1>
                </div>
                <div className="news-tab">
                    <div className="card-n">
                        <img src="https://drive.google.com/uc?export=view&id=1xYD5LHLY80c9cCNN3x2emy3CZNN0abF5" alt="" />
                        <h3>News Heading</h3>
                        <div onClick={() => this.handleClick(0)} className="read-more">Read More</div>
                    </div>

                    <div className="card-n">
                        <img src="https://drive.google.com/uc?export=view&id=1vLxGawdxRcjfhlXa6PFHADpgBHq7KULS" alt="" />
                        <h3>News Heading</h3>
                        <div onClick={() => this.handleClick(1)} className="read-more">Read More</div>
                    </div>

                    <div className="card-n">
                        <img src="https://drive.google.com/uc?export=view&id=1l9l_GLlc48qKJxKE02JHo-IVrhEPbmfe" alt="" />
                        <h3>News Heading</h3>
                        <div onClick={() => this.handleClick(2)} className="read-more">Read More</div>
                    </div>
                </div>
            </div>
        )
    }
}


export default News;