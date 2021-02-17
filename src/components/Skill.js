import React from 'react'
import './Skill.css'

function Skill() {
    return (
        <div id="skill" className="skill">

            <h1> my skills</h1>
            <p className="sub__text"> &#9866; what i know &#9866;</p>

            <div className="skill__content">
                <div className="skill__description">
                    <p>After 3 years of learning programing languages, I can design web application pages by using HTML, CSS and Java Script. 
                        Beside of that, I'm capable of using Java Script framework such as React JS for optimize my work on front-end developement.
                        At the back-end part, I can manage web application architecture by using programing language objects such as Java, Php. 
                        And I mainly use MySQL for SGBD. More and more I used to develope full web application by using framework: Sring Boot(Java), Laravel and Symfony(Php).
                        However i prefer Spring Boot MVC as my main framework because I understand it better than the others.
                        </p>
                </div>

                <div className="skill__box">
                    <div className="skills">
                        <span className="name">HTML</span>
                        <div className="percent">
                            <div className="progress"
                                style={{
                                    width: "95%"
                                }}>

                            </div>
                        </div>
                        <span className="value">95%</span>
                    </div>

                    <div className="skills">
                        <span className="name">CSS</span>
                        <div className="percent">
                            <div className="progress"
                                style={{
                                    width: "80%"
                                }}>

                            </div>
                        </div>
                        <span className="value">80%</span>
                    </div>

                    <div className="skills">
                        <span className="name">Java Script</span>
                        <div className="percent">
                            <div className="progress"
                                style={{
                                    width: "80%"
                                }}>

                            </div>
                        </div>
                        <span className="value">80%</span>
                    </div>

                    <div className="skills">
                        <span className="name">Java</span>
                        <div className="percent">
                            <div className="progress"
                                style={{
                                    width: "80%"
                                }}>

                            </div>
                        </div>
                        <span className="value">80%</span>
                    </div>

                    <div className="skills">
                        <span className="name">PHP</span>
                        <div className="percent">
                            <div className="progress"
                                style={{
                                    width: "75%"
                                }}>

                            </div>
                        </div>
                        <span className="value">75%</span>
                    </div>

                    <div className="skills">
                        <span className="name">MySQL</span>
                        <div className="percent">
                            <div className="progress"
                                style={{
                                    width: "85%"
                                }}>

                            </div>
                        </div>
                        <span className="value">85%</span>
                    </div>
                </div>

            </div>
            
            
        </div>
    )
}

export default Skill
