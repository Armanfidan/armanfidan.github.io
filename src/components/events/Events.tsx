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
                        The first two events were just the beginning. We're excited to be back with
                        the much anticipated comeback for our original series with Turkish music.
                        <br/><br/>
                        Join us on 23rd February for the next event in our flagship series, AYA Originals,
                        which is now better than ever - we will be joined by Sess Nişantaşı DJ Serkan Baykal,
                        who will be bring his amazing music straight from Sess.
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
                        We're upping the stakes - get ready for an entirely new level of event!
                        For our second event, we're partnering with Libertine London, an amazing nightclub on
                        Oxford Street.
                        Prepare for table service, champagne shows and amazing music.
                        <br/><br/>
                        We can't wait to see all our lovely people at this event, where we are kicking off a new era!
                    </p>

                </div>
                <div className="aya-event">
                    <h3>AYA Originals: The Debut</h3>
                    <hr/>
                    <p>
                        Prepare for Turkish music at the heart of London!
                        Join us for an unforgettable night with
                        amazing people and great music.
                        We know you have been missing this in London, and we have decided it's time to have our nights back!
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Events;