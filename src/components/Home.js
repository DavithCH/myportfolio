import React from 'react'
import Navbar from './Navbar'
import Welcome from './Welcome'
import './Home.css'

function Home() {
    return (
        <div className="home"
        >
            <Navbar />
            <Welcome />
        </div>
    )
}

export default Home
