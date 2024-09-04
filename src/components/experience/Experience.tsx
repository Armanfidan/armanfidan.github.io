import React from 'react';
import './experience.css';
import CollapsibleCard from "../card/CollapsibleCard";

function Experience() {
    return (
        <section id="experience">
            <h2>Professional Experience</h2>
            <div className="experience_cards">
                <CollapsibleCard
                    id="cs_card" title="Credit Suisse" date="2022-Present"
                    subtitle1="Technology Analyst"
                    subtitle2="London, UK">
                    <small>We'll figure this out later.</small>
                </CollapsibleCard>
                <CollapsibleCard
                    id="imagination_card" title="Imagination Technologies" date="2021"
                    subtitle1="Machine Learning Engineer"
                    subtitle2="Kings Langley, UK">
                    <small>We'll figure this out later.</small>
                </CollapsibleCard>
                <CollapsibleCard
                    id="imperial_work_card" title="Imperial College London" date="2020"
                    subtitle1="Undergraduate Research Assistant"
                    subtitle2="London, UK">
                    <small>We'll figure this out later.</small>
                </CollapsibleCard>
            </div>
        </section>
    );
}

export default Experience;