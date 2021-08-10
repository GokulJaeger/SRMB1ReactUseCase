import React from 'react'
import './ManagerDashboard.css';

export default function ManagerDashboard() {
    return (
        <div>
            <h1>Manager Dashboard</h1>
            <ul class="nav">
            

            <li>
                <a href="/request" target="_blank">
                    <i class="fab fa-twitter fa-3x twitter">
                        <div class="circle"></div>
                    </i>
                    <div class="title">Request</div>
                </a>
            </li>

            <li>
                <a href="/shelf" target="_blank">
                    <i class="fab fa-codepen fa-3x codepen">
                        <div class="circle"></div></i>
                    <div class="title">Shelf</div>
                </a>
            </li>

            <li>
                <a href="/warehouse" target="_blank">
                    <i class="fab fa-codepen fa-3x codepen">
                        <div class="circle"></div></i>
                    <div class="title">Warehouse</div>
                </a>
            </li>
            <li>
                <a href="/request" target="_blank">
                    <i class="fab fa-twitter fa-3x twitter">
                        <div class="circle"></div>
                    </i>
                    <div class="title">Request</div>
                </a>
            </li>
            <li>
                <a href="/request" target="_blank">
                    <i class="fab fa-twitter fa-3x twitter">
                        <div class="circle"></div>
                    </i>
                    <div class="title">Request</div>
                </a>
            </li>
            <li>
                <a href="/request" target="_blank">
                    <i class="fab fa-twitter fa-3x twitter">
                        <div class="circle"></div>
                    </i>
                    <div class="title">Request</div>
                </a>
            </li>
            <div class="background"></div>

        </ul>

        </div>
    )
}
