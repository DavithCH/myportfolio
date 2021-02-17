import React from 'react'

function Skills(props) {

    const {
        title,
        percentValue
    } = props


    
    return (
        <div className="skills">
            <span className="name">{title}</span>
                <div className="percent">
                <div 
                    className="progress"
                    style={{width : `${percentValue}`}}>

                </div>
                </div>
            <span className="value">{percentValue}</span>
        </div>
    )
}

export default Skills
