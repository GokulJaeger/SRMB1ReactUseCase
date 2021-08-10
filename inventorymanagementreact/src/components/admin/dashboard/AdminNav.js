import React from 'react';
import './AdminNav.css';

export default function AdminNav() {

    return (
        <div className="adminnavbody">
            <h2>admindashboard</h2>
            <ul class="nav">
                <li>
                    <a href="" target="_blank" rel="noreferrer">Manage Users
                        <i class="fas fa-home fa-3x home">
                            <div class="circle"></div>
                        </i>
                        {/* <div class="title">Manage Users</div> */}
                    </a>
                    <ul class="submenu">
                        <li><a href="/adminmanagement">Admin</a></li>
                        <li><a href="/checkermanagement">Checker </a></li>
                        <li><a href="/managermanagement">Manager </a></li>
                        <li><a href="vendormanagement">Vendor </a></li>
                    </ul>
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
               
                <div class="background"></div>

            </ul>


        </div>
    )
}
