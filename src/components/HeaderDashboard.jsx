import React from 'react'
import { FaRegUser } from 'react-icons/fa6'
import { FiDatabase } from 'react-icons/fi'
import { MdLightMode } from 'react-icons/md'
import { ImProfile } from "react-icons/im";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const HeaderDashboard = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
                <div className="container-fluid">
                    <Link to={'/'} className="navbar-brand fw-semibold" href="#">
                        <FiDatabase className='text-primary' /> NLQ System
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center gap-3">
                            <MdLightMode className='text-dark fs-5 cursor-pointer' />

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggl border p-2 d-flex align-items-center gap-2 rounded text-nowrap" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <FaRegUser className='text-dark' /> <h6 className='m-0'>Anuj Singh</h6>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#"><ImProfile /> Profile</a></li>
                                    <li><a className="dropdown-item" href="#"><IoSettingsOutline /> Setting</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default HeaderDashboard
