import React from 'react';
import './contact.css';
import ContactForm from "./ContactForm";
import {FiMail} from "react-icons/fi";
import {BsLinkedin} from "react-icons/bs";
import {GiKiwiBird, GiSmokeBomb} from "react-icons/gi";

function Contact() {
    return (
        <section id="contact-container">
            <ContactForm/>
            <h2>Send Me a Message</h2>
            <hr style={{background: "var(--colour-primary-variant)", marginBottom: "3rem", height: "1px", width: "80%", left: "10%", position: "relative"}}/>
            <h2>Contact Me via Other Means</h2>
            <div className="contact-form">
                <a className="contact-line" href="mailto:fidanogluarman@gmail.com"><FiMail/><p>Send me an email</p></a>
                <a className="contact-line" href="https://www.linkedin.com/in/arman-fidanoglu-86117595/"><BsLinkedin/><p>Reach out to me on LinkedIn</p></a>
                <a className="contact-line" href="https://www.pigeongram.com"><GiKiwiBird/><p>Use a carrier pigeon</p></a>
                <a className="contact-line" href="https://adventure.howstuffworks.com/survival/wilderness/how-to-send-smoke-signal1.htm"><GiSmokeBomb/><p>Send smoke signals</p></a>
            </div>
        </section>
    );
}

export default Contact;