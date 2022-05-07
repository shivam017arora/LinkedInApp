import React, { useState } from 'react'
import './Login.css'

import { auth } from './firebase'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'

const Login = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [photoSrc, setPhotoSrc] = useState('')

    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();
        console.log("Login button clicked!")
        auth.signInWithEmailAndPassword(email, password).then(user => {
            dispatch(login({
                uid: user.user.uid,
                displayName: user.user.displayName,
                photoURL: user.user.photoURL,
                email: user.user.email,
            }))
        }).catch(error => {
            alert(error)
        });
    }

    const register = () => {
        if (name && email && password) {
            auth.createUserWithEmailAndPassword(email, password).then(user => {
                user.user.updateProfile({
                    displayName: name,
                    photoURL: photoSrc
                }).then(() => {
                    console.log('User created')
                    dispatch(login({
                        uid: user.user.uid,
                        displayName: user.user.displayName,
                        photoURL: user.user.photoURL,
                        email: user.user.email
                    }))
                }).catch(err => {
                    console.log(err)
                }
                )
            }).catch(err => {
                alert(err)
            }
            )
            setName('')
            setEmail('')
            setPassword('')
            setPhotoSrc('')
        } else {
            console.log("Details are not entered")
        }
    };

    return (
        <div className='login'>
            <img src='https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo-500x281.png' alt='' />
            <form>
                <input value={name} onChange={e => setName(e.target.value)} type='text' placeholder='Name' />
                <input value={photoSrc} onChange={e => setPhotoSrc(e.target.value)} type='text' placeholder='Profile Picture URL' />
                <input value={email} onChange={e => setEmail(e.target.value)} type='email' placeholder='Email' />
                <input value={password} onChange={e => setPassword(e.target.value)} type='password' placeholder='Password' />
                <button type='submit' onClick={loginToApp}>Sign In</button>
            </form>
            <p> Not a member? <span className='login_register' onClick={register}> Register Now </span></p>
        </div>
    )
}

export default Login