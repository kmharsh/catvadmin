import React from 'react';
import Tablecomponent from './tablecomponent';
import UserProfile from '../pages/UserProfile';

const mainpanel = () => {
    return (
        <div className=''>
            <div className="main-panel">
                <UserProfile />
            </div>
        </div>
    );
}

export default mainpanel;
