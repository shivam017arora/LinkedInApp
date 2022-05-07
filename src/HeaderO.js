import './HeaderO.css'
import React from 'react'
import { Avatar } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const HeaderO = ({ avatar, title, Icon, _onClick, user }) => {

    const showDropDown = () => {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    return (
        <div className='header_option_container'>
            {Icon && <Icon className='header_option_icon' />}
            {avatar && (
                <Avatar className='header_option_avatar' src={user?.photoURL} > {user?.email[0]} </Avatar>
            )}
            <div className='header_option_avatar'>
                <h3 className='header_option_title'>{title}</h3>
                {avatar && (
                    <div>
                        <ArrowDropDownIcon className='header_option_icon dropbtn' onClick={showDropDown} />
                        <div id="myDropdown" className="dropdown-content">
                            <a>My Account</a>
                            <a onClick={_onClick}>Sign Out</a>
                        </div>
                    </div>
                )}
            </div>

        </div >
    )
}

export default HeaderO;