import React from 'react';
import './CheckerDashboard.css';

import { useHistory } from "react-router-dom";
export default function CheckerDashboard() {
    const history = useHistory();
    return (
        <div>
            
            <div class="button-container">
                <div class="button-flipper">
                    <button class="front-button" onClick={() => {
                        history.goBack();
                    }}>BACK</button>
                    <button class="back-button"><a href="/" className="bckbtn">LOGOUT</a></button>
                </div>
            </div>
            <h1>checker dashboard</h1>
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
