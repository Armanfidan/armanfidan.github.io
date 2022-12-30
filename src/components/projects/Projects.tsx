import React from 'react';
import "./projects.css";
import CollapsibleCard from "../card/CollapsibleCard";

function Projects() {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="project_cards">
                <CollapsibleCard
                    id="fyp_card" title="Dynamic Grasping with a Quadruped Mobile Manipulator" date="2022"
                    subtitle1="Final-Year Project"
                    subtitle2="Imperial College London, UK">
                    <small>We'll figure this out later.<br/>Oh, don't forget to put GitHub links for each project
                    <br/>Thanks x</small>
                </CollapsibleCard>
                <CollapsibleCard
                    id="hlp_card" title="ISSIE Logic Simulator: Draw Block" date="2021"
                    subtitle1="High-Level Programming Project"
                    subtitle2="Imperial College London, UK">
                    <small>We'll figure this out later.</small>
                </CollapsibleCard>
                <CollapsibleCard
                    id="visuaid_card" title="VisuAid" date="2020"
                    subtitle1="Second-Year Project"
                    subtitle2="Imperial College London, UK">
                    <small>We'll figure this out later.</small>
                </CollapsibleCard>
                <CollapsibleCard
                    id="rover_card" title="Rover" date="2019"
                    subtitle1="First-Year Project"
                    subtitle2="Imperial College London, UK">
                    <small>We'll figure this out later.</small>
                </CollapsibleCard>
                <CollapsibleCard
                    id="malafatus_card" title='"Malafatus"' date="2020"
                    subtitle1="Productivity App for Android"
                    subtitle2="Independent">
                    <small>We'll figure this out later.</small>
                </CollapsibleCard>
                <hr style={{background: "var(--colour-primary-variant)", height: "1px", width: "80%", alignSelf: "center"}}/>
                <CollapsibleCard
                    id="website_card" title='This Website' date="2022"
                    subtitle1="Designed using React and TypeScript"
                    subtitle2="">
                    <small>We'll figure this out later.</small>
                </CollapsibleCard>
            </div>
        </section>
    );
}

export default Projects;