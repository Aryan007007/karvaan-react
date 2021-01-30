import React, { useState } from 'react';
import firebase from '../../firestore';
import { v4 as uuidv4 } from 'uuid';

import Footer from '../footer/footer.component';

import './content-management.styles.scss';

const ContentManager = () => {
    const [heading, setHeading] = useState("");
    const [content, setContent] = useState("");
    const [fileUrl, setFileUrl] = useState([]);

    const ref = firebase.firestore().collection("news");

    // ADD FUNCTION
    function addNews(newArticle, e) {
        e.preventDefault()
        ref.doc(newArticle.id).set(newArticle).catch((err) => {
            console.error(err);
        });
        document.getElementById('heading').value = '';
        document.getElementById('content').value = '';
        document.getElementById('image').value = '';
        setTimeout(() => alert('Your input has been saved'), 500)


    }

    const onFileChange = async (e) => {
        const file = e.target.files[0];
        const storageRef = firebase.storage().ref()
        const fileRef = storageRef.child(file.name)
        await fileRef.put(file)
        setFileUrl(await fileRef.getDownloadURL())
    }

    return (
        <div>
            <div className="input-form">
                <h1>Update News</h1>

                <p>This part of the application allows the core team to update the news on the homepage without having to edit any code</p>

                <form>
                    <label>image in 1:1 ratio</label>
                    <input
                        id='image'
                        type="file"
                        onChange={onFileChange}
                    />

                    <label>heading</label>
                    <input
                        type="text"
                        value={heading}
                        onChange={(e) => setHeading(e.target.value)}
                        id='heading'
                    />
                    <label>Content</label>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        id='content'
                    />

                    <button id='submit' onClick={() => addNews({ fileUrl, heading, content, id: uuidv4() })}>
                        Update
                </button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default ContentManager; 