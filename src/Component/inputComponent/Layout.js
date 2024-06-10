import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import UserProfile from '../pages/UserProfile';

const Layout = ({ children, hideNavbar }) => {
    const [showPanel, setShowPanel] = useState(false);

    const toggleSidebar = () => {
        setShowPanel(prevState => !prevState);
    };

    return (
        <div className='content-wrp'>
            {!hideNavbar &&
                <div className={`main-panel sticky-top ${showPanel ? 'with-sidebar' : ''}`}>
                    <UserProfile func={toggleSidebar} />
                </div>
            }
            <div className={`d-flex align-items-start ${showPanel ? 'with-sidebar' : ''}`}>
                <div className={`sidebar-wrapper ${showPanel ? 'showSideBar' : 'hideSideBar'} d-md-block d-none`}>
                    {!hideNavbar &&
                        <div className="app">
                            <Navbar />
                        </div>
                    }
                </div>
                <div className={`overflow-hidden w-100 ${showPanel ? 'with-sidebar' : ''} ${showPanel ? 'sidebar-margin' : ''}`}>
                    {children}
                </div>
            </div>
            <div className='mobile-nav-toggle' onClick={toggleSidebar}>
                <span className="menu-icon">+</span>
            </div>
        </div>
    );
}

export default Layout;
