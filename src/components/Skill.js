import React from 'react'
import './Skill.css'
import Skills from './skills/Skills'

class Skill extends React.Component {
        state = {
            skills : [
                {
                    id:1,
                    title:"HTML",
                    percentValue:"95%"
                },
                {
                    id:2,
                    title:"CSS",
                    percentValue:"80%"
                },
                {
                    id:3,
                    title:"Java Script",
                    percentValue:"80%"
                },
                {
                    id:4,
                    title:"Java",
                    percentValue:"85%"
                },
                {
                    id:5,
                    title:"PHP",
                    percentValue:"85%"
                },
                {
                    id:1,
                    title:"MYSQL",
                    percentValue:"90%"
                },

            ]
        }     
    render(){
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
                        {this.state.skills.map(skill => (
                            <Skills 
                                key = {skill.id}
                                title = {skill.title}
                                percentValue = {skill.percentValue}
                            />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Skill
