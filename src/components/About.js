import React from 'react'
import './About.css'

function About() {
    return (
        <div id="about" className="about">
            <h1>About me</h1>
            <p className="sub__text"> &#9866; who am I? &#9866;</p>
            <div className="about__text">
                <p>I'm Davith. I'm 23 and I'm from Cambodia.
                I currently live in French. After my graduation with profressional qualification "Applications developer",
                I am looking for an oppotunity to work as Full-Stack developer.
                I have been fascinated in IT sector since I was young.
                To me, IT is magic! It provides new technologies to help the world.

                I love working as group but I am also be able to work alone confidently.
                I'm a quick learner and problem solving by using simple and scalable solutions.
                I like to share my knowledges to new generation people.
                To me, meeting people, exchanging ideas are the key to success in work place. 
                And more importantly is respecting each other.
                
                Beside of working, I also like sports such as football, volleyball and PingPong. 



                </p>
                <a id="resume" target="_blank" href="CV.pdf" title="resume">My resume</a>

            </div>
        </div>
    )
}

export default About
