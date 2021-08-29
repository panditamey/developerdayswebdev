import React, { useState } from 'react';
import bg from './images/bg.png';
import './Main.css';

function Main() {

    // const [switchToggled, setSwitchToggled] = useState(false);
    // const ToggleSwitch = () => {
    //     switchToggled ? setSwitchToggled(false) : setSwitchToggled(true);
    // }

    return (
        <div className="ResumeBody">

            <div className="ResumeContainer">
                <div className="left_Resume">
                    <div className="profileText">
                        <h2>Amey Pandit<br /><span>Web Developer</span></h2>
                    </div>
                    <div className="contactInfo">
                        <h3 className="title">Contact Info</h3>
                        <ul>
                            <li>
                                <span className="icon"><i class="fas fa-mobile"></i></span>
                                <span className="text">9702153712</span>
                            </li>
                            <li>
                                <span className="icon"><i className="far fa-envelope"></i>
                                </span>
                                <span className="text">amey.pandit01@gmail.com</span>
                            </li>
                            <li>
                                <span className="icon"><i className="fa fa-globe" aria-hidden="true"></i>
                                </span>
                                <span className="text">ameypandit.xyz/</span>
                            </li>
                            <li>
                                <span className="icon"><i className="fab fa-linkedin"></i>
                                </span>
                                <span className="text">ameypandit</span>
                            </li>
                            <li>
                                <span className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i>
                                </span>
                                <span className="text">Mumbai , India</span>
                            </li>
                        </ul>
                    </div>
                </div>




                <div className="right_Resume">
                    <div className="aboutResume">
                        <h2 className="title2">Profile</h2>
                        <p>I'm 18 year old First Year Information Technology Engineering student.</p>
                        <p>I love to contribute to open-source projects.</p>
                        <p>I love Sketch <i class="fas fa-paint-brush"></i>.</p>
                    </div>

                    <div className="aboutResume">
                        <div className="contactInfo education">
                            <h2 className="title2">Education</h2>
                            <ul>
                                <li>
                                    <p className="h5">2020-Present</p>
                                    <p className="h4">Bachelor Degree in Information Technology</p>
                                    <p className="h4">ACE - Mumbai University</p>
                                </li>
                                <li>
                                    <p className="h5">2018-2020</p>
                                    <p className="h4">HSC</p>
                                    <p className="h4">Sathaye College , Mumbai</p>
                                </li>
                                <li>
                                    <p className="h5">2008-2018</p>
                                    <p className="h4">SSC</p>
                                    <p className="h4">St. Xaviers High School , Mumbai</p>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <div className="aboutResume">
                        <h2 className="title2">Organization</h2>
                        <p className="orgName">E-Cell - ACE Mumbai</p>
                    </div>

                    <div className="skills">
                        <h3 className="title2">Skills</h3>
                        <div className="skillsgrid">
                            <i className="fab fa-html5 skillicon"></i>
                            <i className="fab fa-css3 skillicon"></i>
                            <i className="fab fa-js-square skillicon"></i>
                            <i className="fab fa-react skillicon"></i>
                            <i className="fab fa-node skillicon"></i>
                        </div>
                    </div>

                    <div class="LanguageInfo language">
                <h3 class="title2">Languages</h3>
                <ul>
                    <li>
                        <span class="textLanguage">English</span>
                    </li>
                    <li>
                        <span class="text">Marathi</span>
                    </li>
                    <li>
                        <span class="text">Hindi</span>
                    </li>
                </ul>
            </div>

                </div>



            </div>
        </div>
    );
}

export default Main;
