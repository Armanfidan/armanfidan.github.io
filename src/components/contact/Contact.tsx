import React, {TouchEvent} from 'react';
import './contact.css';
import ContactForm from "./ContactForm";
import {FiMail} from "react-icons/fi";
import {BsLinkedin} from "react-icons/bs";
import {GiKiwiBird, GiSmokeBomb} from "react-icons/gi";
import {useSwiper} from "swiper/react";

function Contact() {
    const verticalSwiper = useSwiper();
    const contactContainer = document.getElementById('contact');
    let initial_position: number;
    let final_position: number;
    let initial_move: boolean;
    let scrollTop: number;

    const enableSlideMovement = (enable: boolean) => {
        verticalSwiper.allowTouchMove = enable;
        verticalSwiper.allowSlideNext = enable;
        verticalSwiper.allowSlidePrev = enable;
    }

    const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
        if (!contactContainer || !verticalSwiper) return;
        initial_position = event.touches[0].clientY;
        initial_move = true;
        scrollTop = contactContainer.scrollTop;
    }
    const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
        if (!contactContainer || !verticalSwiper || !initial_move) return;
        initial_move = false;
        final_position = event.touches[0].clientY;
        const touch_delta = final_position - initial_position;
        const direction: 'up' | 'down' = touch_delta > 0 ? 'up' : 'down';
        if ((scrollTop === 0 && direction === 'up')) {  // At the top scrolling up
            enableSlideMovement(true);
        } else {  // Everything else
            enableSlideMovement(false);
            verticalSwiper.slideTo(2);
        }
    }

    const prev = document.getElementById('prev-nav-button-vertical');
    if (prev) prev.addEventListener('click', () => enableSlideMovement(true));

    return (
        <section id="contact" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
            <h2>Send Me a Message</h2>
            <ContactForm/>
            <hr style={{background: "black", boxShadow: 'none', borderWidth: '0', height: "1px", width: "25%", position: "relative"}}/>
            <h2>Contact Me via Other Means</h2>
            <div className="contact-form">
                <a className="contact-method" href="mailto:fidanogluarman@gmail.com"><FiMail/><p>Send me an email</p></a>
                <a className="contact-method" href="https://www.linkedin.com/in/arman-fidanoglu-86117595/"><BsLinkedin/><p>Reach out to me on LinkedIn</p></a>
                <a className="contact-method" href="https://www.pigeongram.com"><GiKiwiBird/><p>Use a carrier pigeon</p></a>
                <a className="contact-method" href="https://adventure.howstuffworks.com/survival/wilderness/how-to-send-smoke-signal1.htm"><GiSmokeBomb/><p>Send smoke signals</p></a>
            </div>
        </section>
    );
}

export default Contact;