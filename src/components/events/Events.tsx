import React from 'react';
import './events.css';
import {BsInstagram} from "react-icons/bs";

function Events() {
    return (
        <section id="events-container">
            <div id="aya-sidebar">
                <div id="aya-logo">
                    <img style={{borderRadius: '0'}} src={require("../../assets/AYA_nights_logo_white.png")} alt="AYA Nights Logo"/>
                </div>
                <a className="social" href="https://www.instagram.com/aya.nights"><BsInstagram/>Instagram</a>
                <img id="vibe" className="sidebar-picture" src={require("../../assets/aya_dj.jpeg")} alt="AYA Nights DJ Deck"/>
                <img className="sidebar-picture" src={require("../../assets/aya_vibe.jpeg")} alt="AYA Nights - Vibe"/>
                <img className="sidebar-picture" src={require("../../assets/aya_vibe_2.jpeg")} alt="AYA Nights - Vibe"/>
            </div>
            <div id="aya-content">
                <h2>Event Management</h2>
                <p>
                    I am a partner in the event management initiative, AYA Nights.
                    We organise nightclub events in various popular venues across London.

                </p>
                <h3>Vision</h3>
                <p>This...</p>
                <br/>
                <hr style={{width: '60%'}}/>
                <br/>
                <h2>Upcoming Events</h2>
                <div style={{padding: '2rem', border: '2px white solid', marginBottom: '1rem'}}/>
                <div style={{padding: '2rem', border: '2px white solid', marginBottom: '1rem'}}/>
                <br/>
                <hr style={{width: '60%'}}/>
                <br/>
                <h2>Past Events</h2>
                <div style={{padding: '2rem', border: '2px white solid', marginBottom: '1rem'}}/>
                <div style={{padding: '2rem', border: '2px white solid', marginBottom: '1rem'}}/>
            </div>
        </section>
    );
}

export default Events;