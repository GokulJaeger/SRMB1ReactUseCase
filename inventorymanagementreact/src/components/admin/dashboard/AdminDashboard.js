import React from 'react';
import { useHistory } from "react-router-dom";
import './AdminDashboard.css';
import AdminNav from './AdminNav';
export default function AdminDashboard() {
    const history = useHistory();
    return (
        <div>

            <AdminNav />
            <div class="button-container">
                <div class="button-flipper">
                    <button class="front-button" onClick={() => {
                        history.goBack();
                    }}>BACK</button>
                    <button class="back-button" ><a href="/" className="bckbtn">LOGOUT</a></button>
                </div>
            </div>
        </div>
    )
}
