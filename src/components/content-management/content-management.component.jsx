import React, { useState } from 'react';
import firebase from '../../firestore';
import { v4 as uuidv4 } from 'uuid';

import Footer from '../footer/footer.component';

import './content-management.styles.scss';

const ContentManager = () => {
    const [heading, setHeading] = useState("");
    const [content, setContent] = useState("");

    const ref = firebase.firestore().collection("news");

    // ADD FUNCTION
    function addNews(newArticle) {
        ref.doc(newArticle.id).set(newArticle).catch((err) => {
            console.error(err);
        });
        document.getElementById('heading').value = '';
        document.getElementById('content').value = '';
        setTimeout(() => alert('Your input has been saved'), 500)
    }

    return (
        <div>
            <div className="input-form">
                <h1>Update News</h1>
                <p>This part of the application allows the core team to update the news on the homepage without having to edit any code</p>
                <h4>heading</h4>
                <input
                    type="text"
                    value={heading}
                    onChange={(e) => setHeading(e.target.value)}
                    id='heading'
                />
                <h4>Content</h4>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    id='content'
                />

                <button id='submit' onClick={() => addNews({ heading, content, id: uuidv4() })}>
                    Update
            </button>
            </div>
            <Footer />
        </div>
    )
}

export default ContentManager; 