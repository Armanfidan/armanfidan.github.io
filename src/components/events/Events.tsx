import React from 'react';
import './events.css';
import {BsInstagram} from "react-icons/bs";

function Events() {
    return (
        <section id="events-container">
            <div id="aya-sidebar">
                <div id="aya-logo">
                    <img style={{borderRadius: '0'}} src={require("../../assets/AYA_nights_logo_white.png")}
                         alt="AYA Nights Logo"/>
                </div>
                <a className="social" href="https://www.instagram.com/aya.nights"><BsInstagram/>Instagram</a>
                <img id="vibe" className="sidebar-picture" src={require("../../assets/aya_dj.jpeg")}
                     alt="AYA Nights DJ Deck"/>
                <img className="sidebar-picture" src={require("../../assets/aya_vibe.jpeg")} alt="AYA Nights - Vibe"/>
                <img className="sidebar-picture" src={require("../../assets/aya_vibe_2.jpeg")} alt="AYA Nights - Vibe"/>
            </div>
            <div id="aya-content">
                <h2>Event Management</h2>
                <p>
                    As a partner in the event management initiative, <b style={{color: 'var(--colour-primary-light)'}}>AYA Nights</b>, I organise nightclub events in various
                    popular venues across London.
                    By partnering with high-end venues and designing a welcoming and lively space,
                    we create a friendly atmosphere where a diverse crowd of young professionals can get together and
                    party.
                </p>
                <h3>Our Vision and Mission</h3>
                <p>
                    We recognise that young professionals in London have no means of getting together with
                    like-minded individuals in a nightclub setting, as the events are either too expensive and
                    discriminatory, or very "studenty".
                    Our mission is to break this barrier and provide a platform for this demographic to
                    get together and enjoy a night out in a beautiful and lively setting, in a way that was not possible
                    before.
                </p>
                <br/>
                <hr style={{width: '60%'}}/>
                <br/>
                <h2>Upcoming Events</h2>
                <div className="aya-event">
                    <h3>AYA Mediterranean: The Debut</h3>
                    <hr/>
                    <p>
                        Bring on the Mediterranean!
                        <br/><br/>
                        After huge demand by our audience, we are incredibly excited to finally be unveiling our
                        newest event series, AYA Mediterranean! This series consists of an international crowd and international music.
                        Think all of your favourites - Reggaeton, Commercial, R&B, Hip-Hop.
                        <br/><br/>
                        We're proud to be starting this new chapter with our first Mediterranean event, "The Debut".
                        You will enjoy unmistakably good music in our partnering venue, Libertine London, on 2nd February 2023.
                    </p>
                </div>
                <div className="aya-event">
                    <h3>AYA Originals: The Return</h3>
                    <hr/>
                    <p>
                        The much anticipated comeback for our original series with Turkish music.
                        We cannot wait to share this event with you all!
                    </p>
                </div>
                <br/>
                <hr style={{width: '60%'}}/>
                <br/>
                <h2>Past Events</h2>
                <div className="aya-event">
                    <h3>AYA Originals: The Reunion</h3>
                    <hr/>
                    <p>
                        Fill this in.
                    </p>
                </div>
                <div className="aya-event">
                    <h3>AYA Originals: The Debut</h3>
                    <hr/>
                    <p>
                        Fill this in.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Events;