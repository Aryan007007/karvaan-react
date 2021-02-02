import React, { useState, useEffect } from 'react';

import firebase from '../../firestore';

import LoadingMessage from '../withSplashScreen';

import '../news/news.styles.scss';

function News() {
    const [news, setNewsCards] = useState([]);
    const [loading, setLoading] = useState(true);

    const ref = firebase.firestore().collection('news');

    function getNews() {
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => { items.push(doc.data()) })

            setNewsCards(items);
            setLoading(false);
        })
    }

    useEffect(() => {
        getNews();
    });

    if (loading) {
        return <LoadingMessage />
    }

    // function handleClick(i)
    //     var btn = document.getElementsById(`${.heading}`);
    //     for (i = 0; i < btn.length; i++) {
    //         btn[i].addEventListener("click", function () {
    //             this.parentElement.classList.toggle('exapanded');
    //         })
    //     }

    return (
        <div className="container">
            <div className="news-heading">
                <h1>News</h1>
            </div>
            <div className="news-tab">
                {news.map((article) => (
                    <div key={article.heading} className="card-n">
                        <img src={article.fileUrl} alt='news' />
                        <h3>{article.heading}</h3>
                        <p>{article.content}</p>
                        <div>Read More</div>
                    </div>
                ))
                }
            </div>
        </div>
    )



}


export default News;