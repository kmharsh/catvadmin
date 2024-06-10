import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
const UserProfile = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const navigate = useNavigate();

    const toggleProfilePopup = () => {
        setIsProfileOpen(!isProfileOpen);
    };

    const handleLogout = () => {
        navigate('/login');
    };

    return (
        <div className='container'>
            <div className='inner-flex d-flex justify-content-between align-items-center w-100'>
                <div className='w-75'>
                    <img src="./images/logo.svg" alt="Logo" className='w-15'/>
                </div>
                <div className="user-profile" onClick={toggleProfilePopup}>
                    <img src="./images/faces-clipart/profile.jpg" alt="User Profile" />
                    <span className="user-name">Kumar Harsh Srivastava</span>
                    {isProfileOpen && (
                        <div className="profile-popup">
                            <ul>
                                <li><Link to="/Profile" className="hyper-link">User Profile</Link></li>
                                <li onClick={handleLogout}>Logout</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
