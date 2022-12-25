import React, {useState} from 'react';
import './education.css';
import {IoIosArrowDown} from "react-icons/io";

function Education() {
    const [expanded1, setExpanded1] = useState(false)
    const [expanded2, setExpanded2] = useState(false)
    const [expanded3, setExpanded3] = useState(false)
    const [expanded4, setExpanded4] = useState(false)
    let handleClick = (box: number) => {
        switch (box) {
            case 1:
                expanded1 ? setExpanded1(false) : setExpanded1(true)
                break;
            case 2:
                expanded2 ? setExpanded2(false) : setExpanded2(true)
                break;
            case 3:
                expanded3 ? setExpanded3(false) : setExpanded3(true)
                break;
            case 4:
                expanded4 ? setExpanded4(false) : setExpanded4(true)
                break;
            default:
                break;
        }
    };
    return (
        <section id="education">
            <h2>Education</h2>
            <div className="education__cards">
                <div className={"education__card_bg" + (expanded1 ? " expanded" : "")} id="imperial_card">
                    <article className={"education__card" + (expanded1 ? " expanded" : "")} id="imperial_card_inner">
                        <div></div>
                        <div>
                            <h3>Imperial College London</h3>
                            <small>MEng Electrical and Electronic Engineering with Management<br/>
                                First-Class Degree - 78%</small>
                            <div className={"content" + (expanded1 ? " expanded" : "")}>
                                <small>
                                    <ul className="a">
                                        <li>Key modules: Machine Learning, Optimisation, Network Security, Algorithms & Data Structures, Computer Architecture, Electronics</li>
                                        <li>Awards:
                                            <ul>
                                            <li>2021 Dean’s List award for Academic Excellence – Among top 5% of cohort</li>
                                                <li>2020 Dean's List award for Academic Excellence - Among top 10% of cohort</li>
                                                <li>Entrepreneurship – Engineers in Business Fellowship Prize for Tutti: An Amateur Orchestra Management Program</li>                                           </ul>
                                        </li>
                                    </ul>
                                </small>
                            </div>
                        </div>
                        <a className={"expand-btn" + (expanded1 ? " expanded" : "")} onClick={() => {
                            const card = document.getElementById("imperial_card");
                            if (card != null) handleClick(1);
                        }}><IoIosArrowDown/></a>
                    </article>
                </div>
                <div className={"education__card_bg" + (expanded2 ? " expanded" : "")} id="msgsu_card">
                    <article className={"education__card" + (expanded2 ? " expanded" : "")}>
                        <div></div>
                        <div>
                            <h3>Mimar Sinan Fine Arts University - State Conservatory</h3>
                            <small>Part-Time Classical Piano Diploma Programme<br/>
                            Distinction - 95%</small>
                            <div className={"content" + (expanded2 ? " expanded" : "")}>HELLOOOOOOOOO</div>
                        </div>
                        <a className={"expand-btn" + (expanded2 ? " expanded" : "")} onClick={() => {
                            const card = document.getElementById("imperial_card");
                            if (card != null) handleClick(2);
                        }}><IoIosArrowDown/></a>
                    </article>
                </div>
                <div className={"education__card_bg" + (expanded3 ? " expanded" : "")} id="enka_card">
                    <article className={"education__card" + (expanded3 ? " expanded" : "")}>
                        <div></div>
                        <div>
                            <h3>Enka High School</h3>
                            <small>International Baccalaureate Diploma<br/>
                            38/45 Overall</small>
                            <div className={"content" + (expanded3 ? " expanded" : "")}>HELLOOOOOOOOO</div>
                        </div>
                        <a className={"expand-btn" + (expanded3 ? " expanded" : "")} onClick={() => {
                            const card = document.getElementById("imperial_card");
                            if (card != null) handleClick(3);
                        }}><IoIosArrowDown/></a>
                    </article>
                </div>
                <div className={"education__card_bg" + (expanded4 ? " expanded" : "")}>
                    <article className={"education__card" + (expanded4 ? " expanded" : "")} id="skills_card">
                        <div></div>
                        <div>
                            <p/>
                            <h3>Skills</h3>
                            <div className={"content" + (expanded4 ? " expanded" : "")}>
                                <h5>Technical Skills:</h5>
                                <h5>Soft Skills:</h5>
                                <h5>Hobbies and Interests:</h5>
                            </div>
                        </div>
                        <a className={"expand-btn" + (expanded4 ? " expanded" : "")} onClick={() => {
                            const card = document.getElementById("imperial_card");
                            if (card != null) handleClick(4);
                        }}><IoIosArrowDown/></a>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default Education;