import React from 'react';
import './education.css';
import CollapsibleCard from "../card/CollapsibleCard";

function Education() {
    return (
        <section id="education">
            <h2>Education</h2>
            <div className="education_cards">
                <CollapsibleCard
                    id="imperial_card" title="Imperial College London" date="Grad. 2022"
                    subtitle1="MEng Electrical and Electronic Engineering with Management"
                    subtitle2="First-Class Degree - 78%">
                    <small>- Key modules: ...
                    </small>
                </CollapsibleCard>
                <CollapsibleCard
                    id="enka_card" title="Enka High School" date="Grad. 2018"
                    subtitle1="International Baccalaureate Diploma" subtitle2="38/45 Overall">
                    <small>We'll figure this out later.</small>
                </CollapsibleCard>
                <CollapsibleCard
                    id="msgsu_card" title="Mimar Sinan Fine Arts University - State Conservatory" date="Grad. 2017"
                    subtitle1="Part-Time Classical Piano Diploma Programme" subtitle2="Distinction - 95%">
                    <small>We'll figure this out later.</small>
                </CollapsibleCard>
                <CollapsibleCard
                    id="skills_card" title="Skills" date="" subtitle1="" subtitle2="">
                    <small>We'll figure this out later.</small>
                </CollapsibleCard>
            </div>
        </section>
    );
}

export default Education;