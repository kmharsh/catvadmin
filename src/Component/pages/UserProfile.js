import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const navigate = useNavigate();

    const toggleProfilePopup = () => {
        setIsProfileOpen(!isProfileOpen);
    };

    const handleLogout = () => {
        // Clear any session data if necessary
        // localStorage.clear();
        navigate('/login');
    };

    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-star">
                <div className="d-flex align-items-center">
                    <img src="./images/logo.svg" alt="Logo" className="img-fluid" />
                </div>
                <div className="user-profile position-relative col-md-2 mb-4" onClick={toggleProfilePopup}>
                    <img src="./images/faces-clipart/profile.jpg" alt="User Profile" className="rounded-circle" />
                    <span className="ml-2">Kumar Harsh Srivastava</span>
                    {isProfileOpen && (
                        <div className="profile-popup position-absolute bg-white border rounded shadow-sm mt-2">
                            <ul className="list-unstyled m-0 p-2">
                                <li><a href="/userProfile" className="text-decoration-none">User Profile</a></li>
                                <li onClick={handleLogout} className="text-decoration-none" style={{ cursor: 'pointer' }}>Logout</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
