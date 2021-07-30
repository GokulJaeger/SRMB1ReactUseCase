import React from 'react';
// import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
    return (
        <header className="header">
            {/* <div>
                <nav className="navbar">
                    <a href="/" className="nav-log">GLOBAL INVENTORY</a>
                    <ul className="nav-menu">
                        <li className="nav-item">
                            <Link to='/' className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/admin' className="nav-link">Admin</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/management' className="nav-link">Management</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/management' className="nav-link">Maintenance</Link>
                        </li>
                    </ul>
                    <div className="hamburger">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </nav>
            </div> */}
            <details>
                <summary></summary>
                <nav className="menu">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/admin">Admin</a>
                    <a href="/management">Mangement</a>
                    <a href="/maintenance">Maintenance</a>
                </nav>
            </details>
        </header>
    )
}
