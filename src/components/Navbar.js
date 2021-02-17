import React from 'react'
import './Navbar.css'
import HomeIcon from '@material-ui/icons/Home';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import PublicIcon from '@material-ui/icons/Public';
import FolderIcon from '@material-ui/icons/Folder';
import ContactMailIcon from '@material-ui/icons/ContactMail';


function Navbar() {

    return (
            <div className="navbar">
                <ul>
                    <li className="nav__ele"> 
                        <a href="">
                            <HomeIcon className="nav_ele_icons"/>
                            <span className="nav_ele_text">Home</span> 
                        </a>
                        
                    </li>
                    <li className="nav__ele" onClick>
                        <a href="#about">
                            <AccountBoxIcon className="nav_ele_icons"/>
                            <span className="nav_ele_text">About</span>
                        </a>
                    </li>
                    <li className="nav__ele">
                        <a href="#skill">
                            <FitnessCenterIcon className="nav_ele_icons"/>
                            <span className="nav_ele_text">Skills</span>
                        </a>
                    </li>
                    <li className="nav__ele">
                        <a href="#service">
                            <PublicIcon className="nav_ele_icons"/>
                            <span className="nav_ele_text">services</span>
                        </a>
                    </li>
                    <li className="nav__ele">
                        <a>
                            <FolderIcon className="nav_ele_icons"/>
                            <span className="nav_ele_text">Projects</span>
                        </a> 
                    </li>
                    <li className="nav__ele">
                        <a href="#contact">
                            <ContactMailIcon className="nav_ele_icons"/>
                            <span className="nav_ele_text">Contact</span>
                        </a>
                    </li>
                </ul>
            </div>
        
    )
}

export default Navbar

