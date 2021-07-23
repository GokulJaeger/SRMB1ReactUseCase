import React from 'react';
import { useHistory } from 'react-router-dom';

export default function AdminDashboard() {

    const history = useHistory();
    const handleLogout = () => {
        history.push('/');
    }
    return (
        <div>
            <h2>AdminDashboard</h2>
            <button type="submit" onClick={handleLogout}>Logout</button>
        </div>
    )
}
