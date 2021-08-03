import React from 'react';
import './Home.css';


export default function Home() {
    return (
        <div className="divbg">
            {/* Card1 */}
            <div className="blog1-card1 spring-fever">
                <div className="title-content">
                    <h3>ADMIN</h3>
                    <div className="intro">Inspiration </div>
                </div>
                <div className="card-info">
                    <a href="/admin">Enter<span className="licon icon-arr icon-black"></span></a>
                </div>
                <div className="utility-info">
                </div>
                <div className="gradient-overlay"></div>
                <div className="color-overlay"></div>
            </div>
            {/* Card2 */}
            <div className="blog2-card2 spring-fever">
                <div className="title-content">
                    <h3>MANAGER</h3>
                    <div className="intro">Inspiration</div>
                </div>
                <div className="card-info">
                    <a href="/management">Enter<span className="licon icon-arr icon-black"></span></a>
                </div>
                <div className="utility-info">
                </div>
                <div className="gradient-overlay"></div>
                <div className="color-overlay"></div>
            </div>
            {/* Card3 */}
            <div className="blog3-card3 spring-fever">
                <div className="title-content">
                    <h3>CHECKER</h3>
                    <div className="intro">Inspiration</div>
                </div>
                <div className="card-info">
                    <a href="/maintenance">Enter<span className="licon icon-arr icon-black"></span></a>
                </div>
                <div className="utility-info">
                </div>
                <div className="gradient-overlay"></div>
                <div className="color-overlay"></div>
            </div>
        </div >
    )
}
