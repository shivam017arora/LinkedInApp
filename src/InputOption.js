import './InputOption.css'

import React from 'react'

const InputOption = ({ option, Icon, color }) => {
    return (
        <div className='inputOption'>
            <Icon style={{ color: color }} />
            <h4>{option}</h4>
        </div>
    )
}

export default InputOption;