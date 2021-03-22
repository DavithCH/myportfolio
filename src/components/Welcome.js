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
                <a href="https://www.linkedin.com/in/davith-chhung-8859b2151/"  target="_blank"><span className="rs__icons"><LinkedInIcon /></span></a>
                <a href="https://github.com/DavithCH" target="_blank"><span className="rs__icons"><GitHubIcon /></span></a>
                <a href="https://twitter.com/ChhungDavith" target="_blank"><span className="rs__icons"><TwitterIcon /></span></a>
            </div>
            
        </div> 
    )
}

export default Welcome
