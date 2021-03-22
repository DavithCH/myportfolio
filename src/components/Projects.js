import React from 'react'
import './Projects.css'
import Project from '../components/Projects/Project'

const projects = [
    {
        id: 1, 
        title: 'fish shop e-commerce',
        image: 'fishshop-ecommerce.png',
        description: 'Building a fish shop e-commerce using ReactJS, CommerceJS and Stripe',
        website: 'https://botohobettafishstore.netlify.app',
        gitLink: 'https://github.com/DavithCH/fish-shop-e-commerce',
    },
    {
        id: 2, 
        title: 'netflix-clone',
        image: 'netflix-clone-image.png',
        description: 'Building a netflix-clone app using ReactJS, firebase and Stripe',
        website: 'https://botoho-netflix-clone.netlify.app/',
        gitLink: 'https://github.com/DavithCH/netflix-clone',
    },

]

function Projects() {
    return (
        <div id="projects" className="projects">
            <h1>my projects</h1>
            <p className="sub__text"> &#9866; what i use to make &#9866;</p>
            <div className="project__box">
                {projects.map((project) => (
                    <Project key={project.id} project={project}/>
                ))}
            </div>
            
        </div>
        
    )
}

export default Projects
