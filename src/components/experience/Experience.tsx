import React from 'react';
import './experience.css';
import {FaAward} from "react-icons/fa";

function Experience() {
    return (
        <section id="experience">
            <h2>Professional Experience</h2>
            <div className="about__content">
                <div className="about__cards">
                    <article className="about__card">
                        <FaAward className="about__icon"/>
                        <div>
                            <h5>Experience</h5>
                            <small>1 year of software engineering experience</small>
                        </div>
                    </article>
                    <article className="about__card">
                        <FaAward className="about__icon"/>
                        <h5>Experience</h5>
                        <small>1 year of software engineering experience</small>
                    </article>
                    <article className="about__card">
                        <FaAward className="about__icon"/>
                        <h5>Experience</h5>
                        <small>1 year of software engineering experience</small>
                    </article>
                    <article className="about__card">
                        <FaAward className="about__icon"/>
                        <h5>Experience</h5>
                        <small>1 year of software engineering experience</small>
                    </article>
                    <article className="about__card">
                        <FaAward className="about__icon"/>
                        <h5>Experience</h5>
                        <small>1 year of software engineering experience</small>
                    </article>
                    <article className="about__card">
                        <FaAward className="about__icon"/>
                        <h5>Experience</h5>
                        <small>1 year of software engineering experience</small>
                    </article>
                </div>
            </div>

        </section>
    );
}

export default Experience;