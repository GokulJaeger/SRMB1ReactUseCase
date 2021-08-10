import React from 'react';
import './AdminDashboard.css';
import AdminNav from './AdminNav';
export default function AdminDashboard() {
    return (
        <div>

            <AdminNav />
            <div class="button-container">
                <div class="button-flipper">
                    <button class="front-button">BACK</button>
                    <button class="back-button"><a href="/" className="bckbtn">LOGOUT</a></button>
                </div>
            </div>
        </div>
    )
}
