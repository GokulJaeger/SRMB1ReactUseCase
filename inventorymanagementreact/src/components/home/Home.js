import React from 'react';
import './Home.css';

export default function Home() {
    return (
        <div>
            {/* <div className="container h-100">
                <div className="row align-middle">
                    <div className="col-md-6 col-lg-4 column">
                        <div className="card gr-1">
                            <img src="\assets\admin2.png"/>
                            <div className="txt">
                                <h1>BRANDING AND <br />
                                    CORPORATE DESIGN</h1>
                                <p>Visual communication and problem-solving</p>
                            </div>
                            <a href="#">more</a>
                            <div className="ico-card">
                                <i className="fa fa-rebel"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 column">
                        <div className="card gr-2">
                            <img src="\assets\manager.png" />
                            <div className="txt">
                                <h1>Web Front-End <br />
                                    SOLUTIONS</h1>
                                <p>How design is implemented on the web.</p>
                            </div>
                            <a href="#">more</a>
                            <div className="ico-card">
                                <i className="fa fa-codepen"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 column">
                        <div className="card gr-3">
                            <img src="\assets\checker.png" />
                            <div className="txt">
                                <h1>UX/UI WEBsite <br />AND MOBILE app</h1>
                                <p>User Interface and User Experience Design.</p>
                            </div>
                            <a href="#">more</a>
                            <div className="ico-card">
                                <i className="fa fa-empire"></i>
                            </div>
                        </div>
                    </div>

                </div>
            </div> */}
            <div className="container h-100">
                <div className="row align-middle">
                    <div className="col-md-6 col-lg-4 column">
                        <div className="card gr-1">
                            <div className="txt">
                                <h1>BRANDING AND
                                    CORPORATE DESIGN</h1>
                                <p>Visual communication and problem-solving</p>
                            </div>
                            <nav>
                                <a href="/admin">more</a>
                            </nav>
                            <div className="ico-card">
                                <i className="fa fa-rebel"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 column">
                        <div className="card gr-2">
                            <div className="txt">
                                <h1>Web Front-End
                                    SOLUTIONS</h1>
                                <p>How design is implemented on the web.</p>
                            </div>
                            <nav>
                                <a href="/management">more</a>
                            </nav>
                            <div className="ico-card">
                                <i className="fa fa-codepen"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 column">
                        <div className="card gr-3">
                            <div className="txt">
                                <h1>UX/UI WEBsite
                                    AND MOBILE app</h1>
                                <p>User Interface and User Experience Design.</p>
                            </div>
                            <nav>
                                <a href="/maintenance">more</a>
                            </nav>
                            <div className="ico-card">
                                <i className="fa fa-empire"></i>
                            </div>
                        </div>
                    </div>

                </div >
            </div >
        </div >
    )
}
