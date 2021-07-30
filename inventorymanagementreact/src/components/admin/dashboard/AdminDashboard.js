import React from 'react';
import { useHistory } from 'react-router-dom';
import './AdminDashboard.css';
export default function AdminDashboard() {

    const history = useHistory();
    const handleLogout = () => {
        history.push('/');
    }
    return (
        <div>
            <header className="header">
                <nav className="navbar">
                <button className="adbtn" type="submit" onClick={handleLogout}>Logout</button>
                </nav>
            </header>
            <h2>AdminDashboard</h2>
            
        </div>
    )
}
