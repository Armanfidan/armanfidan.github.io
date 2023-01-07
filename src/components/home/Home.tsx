import React from 'react';
import './home.css';
import Socials from "./socials";
import HomeButtons from "./HomeButtons";

function Home() {
    return (
        <div id="home-container">
            <div className="container profile-card">
                <div className="profile-picture">
                    <img src={require("../../assets/me.jpg")} alt="Me"/>
                </div>
                <h2>Arman Fidanoglu</h2>
                <h4 className="text-light">Software Engineer</h4>
                <HomeButtons/>
                <Socials/>
            </div>
            <hr className="divider"/>
            <div className="about-container">
                <h1>Glad you're here.<br/>Here's who I am.</h1>
                <p>I'm a recent Electrical and Electronic Engineering graduate from Imperial College London, and
                    currently a Technology Analyst at Credit Suisse.
                    The thing I like the most about myself is that I'm never satisfied with what I know - I have to
                    keep
                    learning and using new technologies.
                    <br/><br/>
                    I also enjoy playing the piano and guitar, producing music, snowboarding and wakeboarding, and
                    most
                    importantly, going to techno raves.
                    Oh and I love beta testing stuff - sometimes I make my devices unusable though:(
                </p>
            </div>
        </div>
    );
}

export default Home;