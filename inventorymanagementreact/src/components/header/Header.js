import React from 'react';
import './Header.css';

export default function Header() {
    return (
        <header className="header">
                <nav className="menu">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/admin">Admin</a>
                    <a href="/management">Mangement</a>
                    <a href="/maintenance">Maintenance</a>
                </nav>
        </header>
    )
}
