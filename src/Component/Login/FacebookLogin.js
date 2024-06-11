import React from 'react';

const FacebookLogin = () => {
    const handleFBLogin = () => {
        window.location.href = '/dashboard';
    };

    return (
        <div onClick={handleFBLogin} className='social-icon'>
            <span className="fa fa-facebook"></span>
        </div>
    );
};

export default FacebookLogin;
