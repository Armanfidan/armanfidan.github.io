import React from 'react';
import "./software.css";
import CollapsibleCard from "../card/CollapsibleCard";

function Software() {
    return (
        <section id="software-container">
            <h2>Software Projects</h2>
            <div className="project_cards">
                <CollapsibleCard
                    id="fyp_card" title="Dynamic Grasping with a Quadruped Mobile Manipulator" date="2022"
                    subtitle1="Imperial College London, UK"
                    subtitle2="Final Year Project">
                    The adoption of mobile manipulators encompasses more industries every day.
                    Although their applications are rapidly increasing, performing an autonomous grasp with a
                    mobile manipulator is still slow, as the movement of the base and arm is a sequential motion.
                    <br/><br/>
                    Enabling a base and robotic arm to move simultaneously would significantly speed up mobile
                    manipulation.
                    This project utilises computer vision techniques to detect an object and localise it in
                    three-dimensional space.
                    It then integrates these with robotics techniques to perform an autonomous ”dynamic” grasp with
                    a mobile manipulator, where the base and robotic arm move concurrently.
                    <br/><br/>
                    The outcome of the project is a complete dynamic grasping pipeline, which acts as a proof of
                    concept to pave the way of future research in mobile manipulation.
                    The conducted tests show the potential of this system, along with its challenges.
                    This report discusses the achievements and shortcomings of the developed product.
                    <br/><br/>
                    <a className="btn" href={require('../../assets/af5918_final_report.pdf')}>Project Thesis</a><br/><br/>
                    <a className="btn" href="https://github.com/Armanfidan/auto_grasp.git">GitHub repository for AutoGrasp package</a>
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
                <hr style={{
                    background: "var(--colour-primary)",
                    borderWidth: '0',
                    height: "1px",
                    width: "80%",
                    alignSelf: "center"
                }}/>
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

export default Software;