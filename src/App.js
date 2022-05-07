import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';

import SideBar from './Sidebar'
import MainBody from './MainBody'
import Widgets from './Widgets'

import { login, logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Login from './Login';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => (
      userAuth ? dispatch(login({
        uid: userAuth.uid,
        displayName: userAuth.displayName,
        photoURL: userAuth.photoURL,
        email: userAuth.email,
      })) : dispatch(logout())
    ))
  }, [])

  return (
    <div className="app">
      <Header />
      {
        !user ? <Login /> :
          <div className='app_body'>
            <SideBar />
            <MainBody />
            <Widgets />
          </div>
      }
    </div>
  );
}

export default App;
