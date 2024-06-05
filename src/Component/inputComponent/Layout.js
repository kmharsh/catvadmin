import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import UserProfile from '../pages/UserProfile';

const Layout = ({ children, hideNavbar }) => {
    const [showSidePanel, setShowSidePanel] = useState(true);

    const toggleSidePanel = () => {
        setShowSidePanel(!showSidePanel);
    };

    return (
        <div>
            <div className='content-wrp'>
                {!hideNavbar && (
                    <div className="main-panel sticky-top">
                        <UserProfile func={toggleSidePanel} />
                    </div>
                )}

                <div className='d-flex align-items-start'>
                    {!hideNavbar && (
                        <div className={showSidePanel ? 'showSideBar app w-25 sticky-left' : 'hideSideBar app'}>
                            <Navbar />
                        </div>
                    )}

                    <div className='overflow-hidden w-100'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;
