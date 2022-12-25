import React, {useState} from 'react';
import './education.css';
import {IoIosArrowDown} from "react-icons/io";

function Education() {
    const [expanded1, setExpanded1] = useState(false)
    const [expanded2, setExpanded2] = useState(false)
    const [expanded3, setExpanded3] = useState(false)
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
            default:
                break;
        }
    };
    return (
        <section id="education">
            <h2>Education</h2>
            <div className="education__cards">
                <div className={"education__card_bg" + (expanded1 ? " expanded" : "")} id="imperial_card">
                    <article className={"education__card" +
                        (expanded1 ? " expanded" : "")}>
                        <div></div>
                        <div>
                            <h3>Imperial College London</h3>
                            <small>MEng Electrical and Electronic Engineering with Management</small>
                        </div>
                        <a className={"expand-btn" + (expanded1 ? " expanded" : "")} onClick={() => {
                            const card = document.getElementById("imperial_card");
                            if (card != null) handleClick(1);
                        }}><IoIosArrowDown/></a>
                    </article>
                    <div className={"content" + (expanded1 ? " expanded" : "")}>HELLOOOOOOOOO</div>
                </div>
                <div className={"education__card_bg" + (expanded2 ? " expanded" : "")} id="msgsu_card">
                    <article className={"education__card" + (expanded2 ? " expanded" : "")}>
                        <div></div>
                        <div>
                            <h3>Mimar Sinan Fine Arts University - State Conservatory</h3>
                            <small>Part-Time Classical Piano Diploma</small>
                        </div>
                        <a className={"expand-btn" + (expanded2 ? " expanded" : "")} onClick={() => {
                            const card = document.getElementById("imperial_card");
                            if (card != null) handleClick(2);
                        }}><IoIosArrowDown/></a>
                    </article>
                    <div className={"content" + (expanded2 ? " expanded" : "")}>HELLOOOOOOOOO</div>
                </div>
                <div className={"education__card_bg" + (expanded3 ? " expanded" : "")} id="enka_card">
                    <article className={"education__card" + (expanded3 ? " expanded" : "")}>
                        <div></div>
                        <div>
                            <h3>Enka High School</h3>
                            <small>International Baccalaureate Diploma</small>
                        </div>
                        <a className={"expand-btn" + (expanded3 ? " expanded" : "")} onClick={() => {
                            const card = document.getElementById("imperial_card");
                            if (card != null) handleClick(3);
                        }}><IoIosArrowDown/></a>
                    </article>
                    <div className={"content" + (expanded3 ? " expanded" : "")}>HELLOOOOOOOOO</div>
                </div>
            </div>
        </section>
    );
}

export default Education;