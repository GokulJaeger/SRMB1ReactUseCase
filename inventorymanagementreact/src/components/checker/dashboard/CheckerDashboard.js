import React from 'react';
import './CheckerDashboard.css';

export default function CheckerDashboard() {
    return (
        <div>
            <div>
                <details>
                    <summary></summary>
                    <nav class="menu">
                        <a href="/checkerdashboard">Home</a>
                        <a href="/checkgoods" >CheckGoods</a>
                        <a href="/checkstocks ">CheckStocks</a>
                    </nav>
                </details>
            </div>
            <div>
                <hr></hr>
            </div>
        </div>
    )
}
