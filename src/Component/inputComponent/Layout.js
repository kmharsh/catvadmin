import React, { useMemo, useState } from 'react';
import Navbar from '../navbar/Navbar';
import UserProfile from '../pages/UserProfile';

const Layout = ({ children, hideNavbar }) => {
    const [showPanel, setShowPanel] = useState(true)
    const x = () => {
        setShowPanel(!showPanel)
    }
    return (
        <div>
            <div className='content-wrp'>
                {!hideNavbar &&
                    <div className="main-panel sticky-top">
                        <UserProfile func={x} />
                    </div>
                }
                <div className='d-flex align-items-start'>
                    
                    {(!hideNavbar) &&
                        <div className={showPanel ? 'showSideBar app w-25 sticky-left' : 'hideSideBar app'}>
                            <Navbar />
                        </div>
                    }
                    <div className='overflow-hidden w-100'>
                        {children}
                    </div>

                </div>

            </div>

        </div>

    )
}

export default Layout;
