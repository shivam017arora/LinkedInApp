import './Post.css';
import React, { forwardRef } from 'react';

import { Avatar } from '@material-ui/core';
import InputOption from './InputOption';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

const Post = forwardRef(({ name, description, message, photoSrc }, ref) => {
    return (
        <div ref={ref} className='post'>
            <div className='post_header'>
                <Avatar src={photoSrc}>
                    {name[0]}
                </Avatar>
                <div className='post_info'>
                    <h2> {name} </h2>
                    <p> {description} </p>
                </div>
            </div>
            <div className='post_body'>
                <p> {message} </p>
            </div>
            <div className='post_buttons'>
                <InputOption option='like' Icon={ThumbUpOffAltIcon} color='grey' />
                <InputOption option='Comment' Icon={ChatIcon} color='grey' />
                <InputOption option='Share' Icon={ShareIcon} color='grey' />
                <InputOption option='Send' Icon={SendIcon} color='grey' />
            </div>
        </div>
    )
})

export default Post;