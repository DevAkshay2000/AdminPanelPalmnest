import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../components/Sidebar.css';
import Logo from '../components/images/palmnest_logo.png';

import logoutIcon from '../components/images/Icons/logout.png';

const Sidebar = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear()
        navigate(0)
    }
    return (
        <>
            <div className="page-wrapper " id="main-wrapper" style={{ minWidth: '100%', minHeight: '100%' }}>
                <aside className="left-sidebar">
                    <div>
                        <div className="brand-logo d-flex align-items-center justify-content-between">
                            <Link to="#" className="text-nowrap logo-img">
                                <img src={Logo} width="180px" alt="" />
                            </Link>
                            <div className="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
                                <i className="ti ti-x fs-8"></i>
                            </div>
                        </div>
                        {/* <!-- Sidebar navigation--> */}
                        <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
                            <ul id="sidebarnav">
                                <li className="nav-small-cap">
                                    <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                                    <span className="hide-menu">General</span>
                                    <span style={{ marginLeft: '95px' }}> <img src={logoutIcon} alt="logo" onClick={logout} /> </span>
                                </li>
                                <li className="sidebar-item">
                                    <Link className="sidebar-link" to="/" aria-expanded="false">
                                        <span>
                                            <i className="fa-solid fa-bars"></i>
                                        </span>
                                        <span className="hide-menu">Dashboard</span>
                                    </Link>
                                </li>
                                <li className="nav-small-cap">
                                    <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                                    <span className="hide-menu">Customise Pages</span>
                                </li>
                                <li className="sidebar-item">
                                    <Link className="sidebar-link" to="/homeTable" aria-expanded="false">
                                        <span>
                                            <i className="fa-solid fa-house"></i>
                                        </span>
                                        <span className="hide-menu">Home Page</span>
                                    </Link>
                                </li>
                                <li className="sidebar-item">
                                    <Link className="sidebar-link" to="/activityTable" aria-expanded="false">
                                        <span>
                                            <i className="fa-solid fa-gamepad"></i>
                                        </span>
                                        <span className="hide-menu">Activities Page</span>
                                    </Link>
                                </li>
                                <li className="sidebar-item">
                                    <Link className="sidebar-link" to="/galleryTable" aria-expanded="false">
                                        <span>
                                            <i className="fa-solid fa-camera"></i>
                                        </span>
                                        <span className="hide-menu">Gallery Page</span>
                                    </Link>
                                </li>

                                <li className="sidebar-item">
                                    <Link className="sidebar-link" to="/testimonialsTable" aria-expanded="false">
                                        <span>
                                            <i className="fa-solid fa-comment"></i>
                                        </span>
                                        <span className="hide-menu">Testimonial Page</span>
                                    </Link>
                                </li>
                                <li className="sidebar-item">
                                    <Link className="sidebar-link" to="/query" aria-expanded="false">
                                        <span>
                                            <i className="fa-solid fa-clipboard-question"></i>
                                        </span>
                                        <span className="hide-menu">User Queries</span>
                                    </Link>
                                </li>
                            </ul>

                        </nav>
                    </div>
                    {/* <!-- End Sidebar scroll--> */}
                </aside >
            </div >
        </>
    )
}

export default Sidebar
