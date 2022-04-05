import React from 'react';
import './Activity.css'

const Activity = (props) => {
    const { name, picture } = props.activity;
    return (
        <div className='activity-style'>
            <div>
            <img src={picture} alt="" />
            <h2>name: { name }</h2>
            </div>
        </div>
    );
};

export default Activity;