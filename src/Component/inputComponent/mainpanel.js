import React from 'react';
import UserProfile from '../pages/UserProfile';

const MainPanel = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-6 mb-4">
                    <UserProfile />
                </div>
            </div>
        </div>
    );
}

export default MainPanel;
