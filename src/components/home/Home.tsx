import React from 'react';
import './home.css';
import CTA from "./CTA";
import Socials from "./socials";

function Home() {
    return (
        <div>
            <header>
                <div className="container header__container">
                    <div className="about__me-image">
                        <img src={require("../../assets/me.jpg")} alt="Me"/>
                    </div>
                    <h1>Arman Fidanoglu</h1>
                    <h5 className="text-light">Software Engineer</h5>
                    <CTA/>
                    <Socials/>
                </div>
            </header>
        </div>
    );
}

export default Home;