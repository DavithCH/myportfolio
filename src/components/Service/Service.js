import React from 'react'

function Service(props) {

    const {
        title,
        image,
        description
    } = props
    return (
        <div className="services">
            <h2>{title}</h2>
            <img src= {image} alt=""/>
            <p>
                {description}
            </p>
        </div>
    )
}

export default Service
