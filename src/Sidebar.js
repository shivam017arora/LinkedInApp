import { Avatar } from '@mui/material'
import './Sidebar.css'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

const Sidebar = () => {

    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className='sidebar_recentItem'>
            <span> # </span> <p> {topic} </p>
        </div>
    );

    return (
        <div className='sidebar'>
            <div className='sidebar_top'>
                <img src='https://media-exp1.licdn.com/dms/image/C4E16AQEcCKYmaCXYdA/profile-displaybackgroundimage-shrink_350_1400/0/1649311681374?e=1657152000&v=beta&t=iFQDdrORKkIUdPNDE21kiZQQqOakk_uOCQVhq4_p44g' alt='' />
                <Avatar className='sidebar_avatar' src={user.photoURL}> {user.email[0]} </Avatar>
                <h2> {user.displayName}</h2>
                <h4> {user.email} </h4>
            </div>
            <div className='sidebar_stats'>
                <div className='sidebar_stat'>
                    <p> Who viewed you </p>
                    <p className='sidebar_stat_number'>2,124</p>
                </div>
                <div className='sidebar_stat'>
                    <p> Views on post </p>
                    <p className='sidebar_stat_number'>5,192</p>
                </div>
            </div>
            <div className='sidebar_bottom'>
                <p>Recent</p>
                {recentItem('reactJS')}
                {recentItem('programming')}
                {recentItem('datascience')}
                {recentItem('ml')}
            </div>
        </div>
    )
}

export default Sidebar;