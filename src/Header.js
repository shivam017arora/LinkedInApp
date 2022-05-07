import React from 'react'
import './Header.css'

//material-ui-icons
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

import HeaderOption from './HeaderO'
import { useDispatch } from 'react-redux'
import { logout } from './features/userSlice'
import { auth } from './firebase'

import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

const Header = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch()

    const logoutOfApp = () => {
        console.log("User wants to logout");
        dispatch(logout());
        auth.signOut();
    }

    return (
        <div className='header'>
            <div className='header_left'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/f/f8/LinkedIn_icon_circle.svg' alt='logo' />
                <div className='header_search'>
                    <SearchIcon />
                    <input type='text' placeholder='Search' />
                </div>
            </div>
            <div className='header_right'>
                <HeaderOption title='Home' Icon={HomeIcon} />
                <HeaderOption title='My Network' Icon={SupervisorAccountIcon} />
                <HeaderOption title='Jobs' Icon={BusinessCenterIcon} />
                <HeaderOption title='Messaging' Icon={ChatIcon} />
                {/* <HeaderOption title='Notifications' Icon={NotificationsIcon} /> */}
                <HeaderOption title='Me' _onClick={logoutOfApp} avatar={true} user={user} />
                {/* default image url: https://i.stack.imgur.com/l60Hf.png */}
            </div>
        </div>
    )
}

export default Header;