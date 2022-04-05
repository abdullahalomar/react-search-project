import React from 'react';
import useVoluntears from '../../hooks/useVoluntears';
import Activity from '../Activity/Activity';
import './Voluntears.css'

const Voluntears = () => {
    const [voluntears, setVoluntears] = useVoluntears();
    return (
        <div className='activity'>
            {
                voluntears.map(activity => <Activity
                    key={activity._id}
                    activity = {activity}
                ></Activity>)
          }
        </div>
    );
};

export default Voluntears;