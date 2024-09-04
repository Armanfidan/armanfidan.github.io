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
                <a className="social" href="https://www.instagram.com/aya.nights"><BsInstagram/>AYA Nights Instagram</a>
                <img className="sidebar-picture" src={require("../../assets/aya_team.png")} alt="AYA Nights - Team"/>
                <img className="sidebar-picture" src={require("../../assets/aya_cuckoo.png")}
                     alt="AYA Nights - Cuckoo"/>
                <img id="vibe" className="sidebar-picture" src={require("../../assets/aya_dj.jpeg")}
                     alt="AYA Nights DJ Deck"/>
                <img className="sidebar-picture" src={require("../../assets/aya_vibe.jpeg")} alt="AYA Nights - Vibe"/>
                <img className="sidebar-picture" src={require("../../assets/aya_vibe_2.jpeg")} alt="AYA Nights - Vibe"/>
            </div>
            <div id="aya-content">
                <h2>Event Management</h2>
                <p>
                    In my free time, I work on my event management initiative, <b
                    style={{color: 'var(--colour-primary-light)'}}>AYA Nights</b>,
                    where I organise nightclub events in various popular venues across London.
                    By partnering with high-end venues and designing a welcoming and lively space,
                    we create a friendly atmosphere where a diverse crowd of students and young professionals can get
                    together and party.
                    <br/><br/>
                    Our flagship line of events is AYA Turkish, which appeals to Turkish students and young
                    professionals in the UK, looking for a Turkish party like never before.
                    Across two years, my partners and I have grown our attendee base greatly and become the face of
                    Turkish events in the UK.
                    When any Turkish person is asked about "Turkish events in the UK", the first name that comes into
                    their mind is AYA.
                    <br/><br/>
                    We have also ventured out into a mediterranean crowd, all the while maintaining our strong Turkish
                    presence and brand.
                    We are now further venturing into events with House music alongside Turkish music, and we keep
                    refining our business strategy.
                </p>
                <h3>Our Vision and Mission</h3>
                <p>
                    We recognise that young professionals in London have no means of getting together with
                    like-minded individuals in a nightclub setting, as the events are either too expensive and
                    exclusive, or very "studenty".
                    Our mission is to break this barrier and provide a platform for this demographic to
                    get together and enjoy a night out in a high-end, beautiful and lively setting, in a way that was
                    not possible
                    before.
                </p>
                <br/>
                <hr style={{width: '60%'}}/>
                <br/>
                <h2>Upcoming Events</h2>
                <div className="aya-event">
                    <h3>The House of AYA<br/>Maddox Club</h3>
                    <hr/>
                    <p>
                        We have been working on putting together bigger events with every attempt. We started with
                        Imperial's
                        Student Union and made our way through various Mayfair clubs, upping the stakes with every
                        event.
                        We now have an established customer base and strong relationships with the most prestigious
                        nightclubs in the UK.
                        <br/><br/>
                        We are finally ready to up the stakes once more with our latest event, for which we are renting
                        out the most
                        prestigious and famous Mayfair Club: Maddox.
                        <br/><br/>
                        We will be taking over both rooms of Maddox, with our beloved DJ Jeremy Kohn playing Turkish
                        music in the Main Room and
                        our new and exciting lineup of DJs taking the Green Room to new heights with house music.
                        <br/><br/>
                        I will keep this page updated as we progress through this journey - but for now, this 400-person
                        event is our most ambitious to date.
                    </p>
                </div>
                <br/>
                <hr style={{width: '60%'}}/>
                <br/>
                <h2>Our History and Success Story</h2>
                <div className="aya-event">
                    <h3>AYA Turkish<br/>The Cuckoo Club</h3>
                    <hr/>
                    <p>
                        As we kept working our way up London's most famous and prestigious clubs, we partnered
                        with the Mayfair club Cuckoo.
                        After two sold-out events with them, our attendees were very happy, as we provided them with
                        two amazing nights
                        at this prestigious venue which people cannot even get into on its normal nigths.
                        <br/><br/>
                        As we took over this venue, we filled it with Turkish music and our lovely crowd.
                    </p>
                </div>
                <div className="aya-event">
                    <h3>AYA Mediterranean<br/>Aures London</h3>
                    <hr/>
                    <p>
                        After two successful mediterranean events at Libertine, we decided to venture out and find more unique venues.
                        We came across Aures London, which boasted an immersive event space with a surround sound system and 360-degree
                        displays on all walls, which was an amazing addition to our event.
                        This was a great experience for us and the attendees.
                        <br/><br/>
                        However, after seeing that Mediterranean events diluted our brand image, we decided to stick to what we know best: Turkish events.
                        This has been a great lesson in terms of building and maintaining a brand image.
                    </p>
                </div>
                <div className="aya-event">
                    <h3>AYA Mediterranean<br/>Libertine</h3>
                    <hr/>
                    <p>
                        Bring on the Mediterranean!
                        <br/><br/>
                        After great demand, we decided to venture out into an entirely new demographic of Mediterranean attendees.
                        This event covered an international crowd and international music: Reggaeton, Commercial, R&B, Hip-Hop.
                        <br/><br/>
                        This series was successful and our attendees enjoyed the relaxed environment we created in Libertine.
                    </p>
                </div>
                <div className="aya-event">
                    <h3>AYA Turkish<br/>Libertine</h3>
                    <hr/>
                    <p>
                        After getting our start in Imperial's Student Union as the Turkish Society of the university,
                        We saw a great opportunity to continue organising events and growing our attendee base.
                        This is why we took the leap of faith and decided to up the stakes.
                        <br/><br/>
                        For our second event, we partnered with Libertine London, a Mayfair club on Oxford Street.
                        This club was our first with table service, champagne shows and amazing music.
                        This was a great experience in managing multiple stakeholders and organisation.
                        <br/><br/>
                        We even decided to fly over DJ Serkan Baykal from the famous Istanbul Nightclub, Sess.
                        This event was a sign of our ambition and kicked off a new era: AYA Nights!
                    </p>
                </div>
                <div className="aya-event">
                    <h3>Turkish Society Event<br/>Imperial College Union</h3>
                    <hr/>
                    <p>
                        This event is what started it all.
                        With two coursemates, Alp and Yusuf, I founded the Imperial College Turkish society,
                        through which we then organised an extremely ambitious event in the Metric Nightclub of the Imperial College Union.
                        This event contained Turkish music and 400 Turkish students which came from all over England and Scotland, only for this event.
                        <br/><br/>
                        As a very innovative and first-of-its-kind event, this event led to a wave of hundreds of copycats across the UK and Europe.
                        I can happily say we started a movement!
                        <br/><br/>
                        This event would ultimately lead to what has become AYA Nights, our event management initiative.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Events;