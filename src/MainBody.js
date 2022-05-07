import React, { useState, useEffect } from 'react'
import './MainBody.css'

import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EventIcon from '@mui/icons-material/Event';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';

import InputOption from './InputOption'
import Post from './Post';

import { db, auth } from './firebase'
import firebase from 'firebase'

import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

import FlipMove from 'react-flip-move';

const MainBody = () => {
    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    const user = useSelector(selectUser);

    useEffect(() => {
        db.collection('posts').orderBy('date', 'desc').onSnapshot((post) => (
            setPosts(post.docs.map((doc) => ({
                id: doc.id,
                data: doc.data()
            }))
            )
        ));
    }, []);

    const sendPost = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoURL: user.photoURL || '',
            date: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput('');
    }

    return (
        <div className='mainBody_container'>
            <div className='feed_inputContainer'>
                <div className='feed_input'>
                    <CreateIcon />
                    <form>
                        <input type='text' placeholder='' value={input} onChange={e => setInput(e.target.value)} />
                        <button onClick={sendPost} type='submit'> Send </button>
                    </form>
                </div>
                <div className='feed_inputOptions'>
                    <InputOption option='Photo' Icon={ImageIcon} color='#70B5F9' />
                    <InputOption option='Video' Icon={YouTubeIcon} color='#E7A33E' />
                    <InputOption option='Event' Icon={EventIcon} color='#C0CBCD' />
                    <InputOption option='Write Article' Icon={CalendarViewDayIcon} color='#7FC15E' />
                </div>
            </div>

            {/* Posts */}
            <FlipMove>
                {
                    posts.map((({ id, data: { name, description, message, photoURL, date } }) => (
                        <Post key={id} name={name} description={description} message={message} photoSrc={photoURL} date={date} />
                    )))
                }
            </FlipMove>
        </div>
    )
}

export default MainBody;