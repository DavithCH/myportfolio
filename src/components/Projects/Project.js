import React from 'react'
import './Project.css';



function Project({project}) {
    
    return (
        <div className="project">
            <h2 className="project__title">{project.title}</h2>
            <div className="project__body">
            <img 
                src={project.image}
                alt={project.title}
            />
            <div className="project__description">
                <p>{project.description}</p>
            </div>
            
            <div className="project__buttom">
                <p><a href={project.website} target="_blank">To visit this website</a></p>
                <p><a href={project.gitLink} target="_blank">review code here</a></p>
            </div>
            </div>
            
            
        </div>
    )
}

export default Project
