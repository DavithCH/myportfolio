import React from 'react'
import './Welcome.css'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';


function Welcome() {

    return (
        <div className="welcome"
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/bg_dark_2.jpg)`,
            }}
        >
            <div className="wlc__text__container">
                <div id="top__text">   
                    <p className="simple__text">Bonjour, my name is </p>
                </div>
                <div id="middle__text">
                    <p id="my__name" className="">Davith Chhung</p>
                </div>
                <div id="bottom__text">
                    <p className="simple__text">And I am a <span id="typing" className="green__color">Full-stack developer.</span></p>
                </div>
                <a id="btn__talk" href="#contact">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    LET'S TALK
                </a>
            </div>

            <div className="div__rs__icons">
                <span className="rs__icons"><LinkedInIcon /></span>
                <span className="rs__icons"><FacebookIcon /></span>
                <span className="rs__icons"><GitHubIcon /></span>
                <span className="rs__icons"><TwitterIcon /></span>
            </div>
            
        </div> 
    )
}

export default Welcome
