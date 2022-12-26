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
                        <br/><br/>
                        <b>Achievements</b>
                        <ul style={{listStyleType: "disc"}}>
                            <li>- Awarded 2021 Dean's List award for Academic Excellence - among top 5% of cohort</li>
                            <li>- Awarded 2020 Dean's List award for Academic Excellence - among top 10% of cohort</li>
                            <li>- Co-founded the Turkish Society, acted as Secretary for two years. Gained 70+ members through recruitment circuits and social media, then elected as President and organised ticketed social events with up to 400 attendees from various universities all across the UK</li>
                            <li>- Mentored 10 students at the Global Summer School, 4 of which applied the following year and were offered a place.</li>
                            <li>- Guided the Musical Theatre Society Pit Orchestra and performed three successful shows as the head pianist.</li>
                            <li>- Part of tutoring team of three cohorts of 20 students aged 12-18 in programming and electronics. Chosen twice as the best tutor.</li>
                        </ul>
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
                <hr style={{background: "var(--colour-primary-variant)", height: "1px", width: "80%", alignSelf: "center"}}/>
                <CollapsibleCard
                    id="skills_card" title="Programming Languages" date="" subtitle1="" subtitle2="">
                    <small></small>
                </CollapsibleCard>
                <CollapsibleCard
                    id="skills_card" title="Technical Skills" date="" subtitle1="" subtitle2="">
                    <small></small>
                </CollapsibleCard>
                <CollapsibleCard
                    id="skills_card" title="Soft Skills" date="" subtitle1="" subtitle2="">
                    <small></small>
                </CollapsibleCard>
                <CollapsibleCard
                    id="skills_card" title="Languages" date="" subtitle1="" subtitle2="">
                    <small></small>
                </CollapsibleCard>
            </div>
        </section>
    );
}

export default Education;