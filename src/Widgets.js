import React from 'react'
import './Widgets.css'

import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Widgets = () => {

    const newsArticle = (heading, subtitle) => (
        <div className='widgets_article'>
            <div className='widgets_article_left'>
                <FiberManualRecordIcon />
            </div>
            <div className='widgets_article_right'>
                <h4> {heading} </h4>
                <p>{subtitle} </p>
            </div>
        </div>
    )


    return (
        <div className='widgets'>
            <div className='widgets_header'>
                <h2> LinkedIn News</h2>
                <InfoIcon />
            </div>

            {newsArticle('Q-Commerce volumes surge', '1d ago: 228 readers')}
            {newsArticle('Apple workers slam RTO policy', '1d ago: 36,333 readers')}
            {newsArticle('Its official; Zoom kills creativity', '7d ago: 88,573 readers')}
            {newsArticle('Why high-earning moms clean more', '2d ago: 54,111 readers')}
            {newsArticle('Impact of rate hike by RBI', '2d ago: 3048 readers')}
        </div>
    )
}

export default Widgets;