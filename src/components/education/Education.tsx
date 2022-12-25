import React from 'react';
import './education.css';
import {FaAward} from "react-icons/fa";

function Education() {
    return (
        <section id="education">
            <h2>Education</h2>
            <div className="education__cards">
                <div className="education__card_bg" id="imperial_card">
                    <article className="education__card">
                        <div></div>
                        <div>
                            <h3>Imperial College London</h3>
                            <small>Details of education</small>

                        </div>
                    </article>
                </div>
                <div className="education__card_bg" id="msgsu_card">
                    <article className="education__card">
                        <div></div>
                        <div>
                            <h3>Mimar Sinan Fine Arts University - State Conservatory</h3>
                            <small>Details of education</small>

                        </div>
                    </article>
                </div>
                <div className="education__card_bg" id="enka_card">
                    <article className="education__card">
                        <div></div>
                        <div>
                            <h3>Enka High School</h3>
                            <small>Details of education</small>

                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default Education;