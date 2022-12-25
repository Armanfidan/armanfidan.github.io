import React from 'react';
import './home.css';
import CTA from "./CTA";
import Socials from "./socials";

function Home() {
    return (
        <div id="#home">
            <header>
                <div className="container header__container">
                    <div className="about__me-image">
                        <img src={require("../../assets/me.jpg")} alt="Me"/>
                    </div>
                    <h2>Arman Fidanoglu</h2>
                    <h4 className="text-light">Software Engineer</h4>
                    <CTA/>
                    <Socials/>
                </div>
                <div className="about__container">
                    <h1>Glad you're here.</h1>
                    <h1>Here's who I am.</h1>
                    <p>I'm a recent Electrical and Electronic Engineering graduate from Imperial College London, and currently a Technology Analyst at Credit Suisse.
                        The thing I like the most about myself is that I'm never satisfied with what I know - I have to keep learning and using new technologies.
                        <br/><br/>
                        I also enjoy playing the piano and guitar, producing music, snowboarding and wakeboarding, and most importantly, going to techno raves.
                        Oh and I love beta testing stuff - sometimes I make my devices unusable though:(
                    </p>
                </div>
            </header>
        </div>
    );
}

export default Home;