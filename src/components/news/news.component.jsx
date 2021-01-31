import React, { useState, useEffect } from 'react';

import firebase from '../../firestore';

import '../news/news.styles.scss';

function News() {
    const [news, setNewsCards] = useState([]);

    const ref = firebase.firestore().collection('news');

    function getNews() {
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => { items.push(doc.data()) })

            setNewsCards(items)
        })
    }

    useEffect(() => {
        getNews();
    });

    // function handleClick(i) {
    // var btn = document.getElementsByClassName('read-more');
    // console.log(btn)
    // if (btn[i].parentElement.className === 'card-n') {
    //     btn[i].parentElement.className = 'expanded';
    //     btn[i].innerHTML = "&times;"

    // }
    // else {
    //     btn[i].parentElement.className = 'card-n';
    //     btn[i].innerHTML = 'Read More';
    // }
    // }

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
                    </div>
                ))
                }
            </div>
        </div>
    )
}


export default News;