import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you have a CSS file for custom styles

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary shadow-sm">
            <div className="container">
                <Link className="navbar-brand fw-bold" to="/">
                    <i className="fas fa-code me-2"></i>
                    Full Stack Application
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                About
                            </Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <Link className="btn btn-outline-light" to="/adduser">
                            <i className="fas fa-user-plus me-2"></i>
                            Add User
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
