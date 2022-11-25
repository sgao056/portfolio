import React from 'react';
import Typical from 'react-typical';
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className='colz'>
                        <div className='colz-icon'>
                        <a href='https://www.linkedin.com/in/shang-gao-0853b8197/'>
                            <i className="fa fa-linkedin"></i>
                        </a>
                        </div>
                    </div>
                    <div className="profile-details-name">
                        <span className='primary-text'>
                            {" "}
                            Hello, I'm <span className="highlighted-text">Sean Gao</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                loop={Infinity}
                                steps={[
                                    "Enthusiastic Programmer",
                                    1000,
                                    "React utilizer",
                                    1000,
                                    "UI/UX designer(Wordpress)",
                                    1000,
                                    "Full-stack Web developer",
                                    1000,
                                    "Web3 Programmer",
                                    1000,
                                    "Node.js Restful Api",
                                    1000,
                                    "Graduated Master of Engineer",
                                    1000,
                                ]}
                                />
                            </h1>
                            <span className="profile-role-tagline">
                                Deepening New Horizon with Web Development.
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
                    <button 
                    className="btn primary-btn"
                    style={{color:"white"}}
                    onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                    > Let's Discuss! </button>
                        <a href="Resume.pdf" download="Sean Gao's Resume.pdf">
                            <button className="btn highlighted-btn">Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>
                    </div>
                </div>
            </div>            
        </div>
    );
}
