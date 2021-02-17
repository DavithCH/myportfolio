import React from 'react'
import { Component } from 'react'
import Service from './Service/Service'
import './Services.css'



class Services extends Component {
    state = {
        services : [
            {
                id: 1,
                title: "site-vitrine",
                image: "site-vitrine-logo.png",
                description: "Make a responsive website to show all your company activities."
            },
            {  
                id: 2,
                title: "e-commerce",
                image: "e-commerce-logo.jpg",
                description: "Make a responsive website for your bussiness. You will have full adminstrative controll on your products(CRUD), transactions, advertisings.. etc with full security."
            },
            {
                id: 3,
                title: "social-media",
                image: "social-media-logo.jpg",
                description: "Make social media web application for your company and building a great community as your desire."
            }
        ]
    }

    render(){
        return (
            <div id="service" className="service">
                <h1>my services</h1>
                <p className="sub__text"> &#9866; what i provide &#9866;</p>
                <div className="service__box">
                    {this.state.services.map(service => (
                        <Service
                            key = {service.id}
                            title = {service.title}
                            image = {service.image}
                            description = {service.description}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Services
