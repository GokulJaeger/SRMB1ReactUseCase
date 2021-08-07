import React from 'react';
import './VendorDashboard.css';

export default function VendorDashboard() {
    return (
        <div>
            <div>
                <details>
                    <summary></summary>
                    <nav className="menu">
                        <a href="/vendordashboard">Home</a>
                        <a>Vendor supply check</a>
                        <a>Suppliers</a>
                    </nav>
                </details>
            </div>
            <div>
                <hr></hr>
            </div>
        </div>
    )
}
