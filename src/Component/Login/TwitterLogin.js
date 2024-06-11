import React from 'react';

const TwitterLogin = () => {
    const handleTwitterLogin = () => {
        window.location.href = 'http://localhost:3000/twitter';
    };

    return (
        <div onClick={handleTwitterLogin} className='social-icon'>
            <span className="fa fa-twitter"></span>
        </div>
    );
};

export default TwitterLogin;
