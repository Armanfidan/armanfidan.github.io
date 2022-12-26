import React from 'react';
import './education.css';
import CollapsibleCard from "../card/CollapsibleCard";

function Education() {
    return (
        <section id="education">
            <h2>Education</h2>
            <div className="education__cards">
                <CollapsibleCard id="imperial_card"
                               title="Imperial College London"
                               subtitle1="MEng Electrical and Electronic Engineering with Management"
                               subtitle2="First-Class Degree - 78%">
                    <div className="content" id={"imperial_card_content"}><small>We'll figure this out
                        later.</small></div>
                </CollapsibleCard>
                <CollapsibleCard id="msgsu_card"
                               title="Mimar Sinan Fine Arts University - State Conservatory"
                               subtitle1="Part-Time Classical Piano Diploma Programme"
                               subtitle2="Distinction - 95%">
                    <div className="content" id={"imperial_card_content"}><small>We'll figure this out
                        later.</small></div>
                </CollapsibleCard>
                <CollapsibleCard id="enka_card"
                               title="Enka High School"
                               subtitle1="International Baccalaureate Diploma"
                               subtitle2="38/45 Overall">
                    <div className="content" id={"imperial_card_content"}><small>We'll figure this out
                        later.</small></div>
                </CollapsibleCard>
                <CollapsibleCard id="skills_card"
                               title="Skills"
                               subtitle1="" subtitle2="">
                    <div className="content" id={"imperial_card_content"}><small>We'll figure this out
                        later.</small></div>
                </CollapsibleCard>
            </div>
        </section>
    );
}

export default Education;