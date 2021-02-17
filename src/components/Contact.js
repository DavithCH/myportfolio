import React from 'react'
import emailjs from "emailjs-com"
import './Contact.css'




function Contact() {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_e66jgv8', 'template_ow05mo2', e.target, 'user_fKgNWfvGWzsU4KrMBEuhZ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
    }

    return (
        <div id="contact" className="contact">
                <h1>contact me</h1>
                <form onSubmit={sendEmail}>
                    <div className="form__box">
                        <div className="contact__slot">
                            <input 
                                type="text" 
                                className="" 
                                placeholder="Name" 
                                name="name"></input>
                            
                        </div>
                        <div className="contact__slot">
                            <input 
                                type="email" 
                                className="" 
                                placeholder="Email address" 
                                name="email"></input>
                        </div>
                        <div className="contact__slot">
                            <input 
                                type="text" 
                                className="" 
                                placeholder="Subject" 
                                name="subject"></input>
                        </div>
                        <div className="contact__message">
                            <textarea placeholder="your messages..."></textarea>
                        </div>
                        <div className="contact__btn">
                            <input type="submit" className="" value="Send Message"></input>
                        </div>
                    </div>
                </form>
        </div>
    )
}

export default Contact
