import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ func }) => {
    const [openSubMenu, setOpenSubMenu] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const savedSubMenu = localStorage.getItem('openSubMenu');
        if (savedSubMenu) {
            setOpenSubMenu(parseInt(savedSubMenu, 10));
        }

        const handleNavigation = () => {
            setOpenSubMenu(null);
            localStorage.removeItem('openSubMenu');
        };

        window.addEventListener('popstate', handleNavigation);

        return () => {
            window.removeEventListener('popstate', handleNavigation);
        };
    }, []);

    const toggleSubMenu = (index) => {
        const newOpenSubMenu = openSubMenu === index ? null : index;
        setOpenSubMenu(newOpenSubMenu);
        if (newOpenSubMenu === null) {
            localStorage.removeItem('openSubMenu');
        } else {
            localStorage.setItem('openSubMenu', newOpenSubMenu);
        }
    };

    const handleToggle = () => {
        func();
    };

    const handleMenuClick = (isSubMenu = false) => {
        if (!isSubMenu) {
            setOpenSubMenu(null);
            localStorage.removeItem('openSubMenu');
        }
    };

    const isActive = (path) => {
        const currentPath = location.pathname;
        const active = currentPath === path || currentPath.startsWith(path);
        console.log(`Checking if ${currentPath} is active for ${path}: ${active}`);
        return active;
    };

    const getImageSrc = (baseName, isActive) => `./images/faces-clipart/${baseName}${isActive ? 'active' : ''}.png`;

    return (
        <>
            <nav id="navigation-bar">
                <ul className="items-container">
                    <li className={`item ${isActive('/dashboard') ? 'active' : ''}`} title="home">
                        <Link to="/dashboard" className="hyper-link" onClick={() => handleMenuClick(false)}>
                            <div className="icon-wrapper">
                                <span className="material-symbols-outlined">
                                    <img src={getImageSrc('dashboard', isActive('/dashboard'))} alt="dashboard" />
                                    Dashboard
                                </span>
                            </div>
                        </Link>
                    </li>
                    <li className={`item ${isActive('/customer') ? 'active' : ''}`} title="home">
                        <Link to="/customer" className="hyper-link" onClick={() => handleMenuClick(false)}>
                            <div className="icon-wrapper">
                                <span className="material-symbols-outlined">
                                    <img src={getImageSrc('review', isActive('/customer'))} alt="review" />
                                    Customer
                                </span>
                            </div>
                        </Link>
                    </li>
                    <li className={`item ${openSubMenu === 1 ? 'active' : ''}`}>
                        <a className="hyper-link" onClick={() => toggleSubMenu(1)}>
                            <div className="icon-wrapper">
                                <span className="material-symbols-outlined">
                                    <img src={getImageSrc('logs', openSubMenu === 1)} alt="logs" />
                                    Logs
                                </span>
                            </div>
                            <span className="down-arrow">&#9662;</span>
                        </a>
                    </li>
                    <ul className={`items-container submenu ${openSubMenu === 1 ? 'submenu-enter submenu-enter-active' : 'submenu-exit submenu-exit-active'}`}>
                        <li className={`item ${isActive('/AccessLog') ? 'active' : ''}`}>
                            <Link to="/AccessLog" className="hyper-link" onClick={() => handleMenuClick(true)}>
                                <div className="icon-wrapper">
                                    <span className="material-symbols-outlined">
                                        <img src={getImageSrc('property', isActive('/AccessLog'))} alt="logs" />
                                        Access
                                    </span>
                                </div>
                            </Link>
                        </li>
                        <li className={`item ${isActive('/ErrorLog') ? 'active' : ''}`}>
                            <Link to="/ErrorLog" className="hyper-link" onClick={() => handleMenuClick(true)}>
                                <div className="icon-wrapper">
                                    <span className="material-symbols-outlined">
                                        <img src={getImageSrc('priority', isActive('/ErrorLog'))} alt="priority" />
                                        Error
                                    </span>
                                </div>
                            </Link>
                        </li>
                        <li className={`item ${isActive('/ThirdpartyLog') ? 'active' : ''}`}>
                            <Link to="/ThirdpartyLog" className="hyper-link" onClick={() => handleMenuClick(true)}>
                                <div className="icon-wrapper">
                                    <span className="material-symbols-outlined">
                                        <img src={getImageSrc('branch', isActive('/ThirdpartyLog'))} alt="branch" />
                                        Third party
                                    </span>
                                </div>
                            </Link>
                        </li>
                    </ul>
                    <li className={`item ${openSubMenu === 2 ? 'active' : ''}`}>
                        <div className="hyper-link" onClick={() => toggleSubMenu(2)}>
                            <div className="icon-wrapper">
                                <span className="material-symbols-outlined">
                                    <img src={getImageSrc('management', openSubMenu === 2)} alt="management" />
                                    User Management
                                </span>
                            </div>
                            <span className="down-arrow">&#9662;</span>
                        </div>
                    </li>
                    <ul className={`items-container submenu ${openSubMenu === 2 ? 'submenu-enter submenu-enter-active' : 'submenu-exit submenu-exit-active'}`}>
                        <li className={`item ${isActive('/User') ? 'active' : ''}`}>
                            <Link to="/User" className="hyper-link" onClick={() => handleMenuClick(true)}>
                                <div className="icon-wrapper">
                                    <span className="material-symbols-outlined">
                                        <img src={getImageSrc('user', isActive('/User'))} alt="user" />
                                        User
                                    </span>
                                </div>
                            </Link>
                        </li>
                        <li className={`item ${isActive('/Role') ? 'active' : ''}`}>
                            <Link to="/Role" className="hyper-link" onClick={() => handleMenuClick(true)}>
                                <div className="icon-wrapper">
                                    <span className="material-symbols-outlined">
                                        <img src={getImageSrc('graduation', isActive('/Role'))} alt="graduation" />
                                        Role
                                    </span>
                                </div>
                            </Link>
                        </li>
                        <li className={`item ${isActive('/Permission') ? 'active' : ''}`}>
                            <Link to="/Permission" className="hyper-link" onClick={() => handleMenuClick(true)}>
                                <div className="icon-wrapper">
                                    <span className="material-symbols-outlined">
                                        <img src={getImageSrc('approval', isActive('/Permission'))} alt="approval" />
                                        Permission
                                    </span>
                                </div>
                            </Link>
                        </li>
                    </ul>
                    <li className={`item ${isActive('/Payment') ? 'active' : ''}`}>
                        <Link to="/Payment" className="hyper-link" onClick={() => handleMenuClick(false)}>
                            <div className="icon-wrapper">
                                <span className="material-symbols-outlined">
                                    <img src={getImageSrc('payment', isActive('/Payment'))} alt="payment" />
                                    Payment Details
                                </span>
                            </div>
                        </Link>
                    </li>
                    <li className={`item ${isActive('/Otppage') ? 'active' : ''}`}>
                        <Link to="/Otppage" className="hyper-link" onClick={() => handleMenuClick(false)}>
                            <div className="icon-wrapper">
                                <span className="material-symbols-outlined">
                                    <img src={getImageSrc('authentication', isActive('/Otppage'))} alt="authentication" />
                                    OTPs
                                </span>
                            </div>
                        </Link>
                    </li>
                    <li className={`item ${isActive('/Setting') ? 'active' : ''}`}>
                        <Link to="/Setting" className="hyper-link" onClick={() => handleMenuClick(false)}>
                            <div className="icon-wrapper">
                                <span className="material-symbols-outlined">
                                    <img src={getImageSrc('setting', isActive('/Setting'))} alt="setting" />
                                    Settings
                                </span>
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
