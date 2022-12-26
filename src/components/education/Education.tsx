import React from 'react';
import Card from './Card';
import './education.css';

function Education() {
    return (
        <section id="education">
            <h2>Education</h2>
            <div className="education__cards">
                <Card
                    id={"imperial_card"}
                    title={"Imperial College London"}
                    subtitle={"MEng Electrical and Electronic Engineering with Management\nFirst-Class Degree - 78%"}
                    content={
                        "Key modules: Machine Learning, Optimisation, Network Security, Algorithms & Data Structures, Computer Architecture, Electronics" +
                        "Awards:" +
                        "2021 Dean’s List award for Academic Excellence – Among top 5% of cohort" +
                        "2020 Dean's List award for Academic Excellence - Among top 10% of cohort" +
                        "Entrepreneurship – Engineers in Business Fellowship Prize for Tutti: An Amateur Orchestra Management Program"
                    }/>
                <Card id={"msgsu_card"}
                      title={"Mimar Sinan Fine Arts University - State Conservatory"}
                      subtitle={"Part-Time Classical Piano Diploma Programme"}
                      content={"None yet."}/>
                <Card id={"enka_card"}
                      title={"Enka High School"}
                      subtitle={"International Baccalaureate Diploma"}
                      content={"None yet."}/>
                <Card id={"skills_card"}
                      title={"Skills"}
                      subtitle={""}
                      content={"None yet."}/>
            </div>
        </section>
    );
}

export default Education;