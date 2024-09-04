import React from 'react';
import "./software.css";
import CollapsibleCard from "../card/CollapsibleCard";

function Software() {
    return (
        <section id="software-container">
            <h2>Software Projects</h2>
            <div className="project_cards">
                <CollapsibleCard
                    id="fx_card" title="Real-Time Forex Trading Bot" date="2024"
                    subtitle1="Independent"
                    subtitle2="">
                    This is a backtesting system and real-time trading bot, retrieving data from and booking orders into an exchange.
                    It features a backtesting system with two indicators currently built in - Moving Average Crossover and Inside Bar Momentum.
                    However. it is designed to be easily scalable
                    to add more indicators in the future. It calculates metrics such as:
                    <ul>
                        <li>Return on Investment</li>
                        <li>Sharpe Ratio</li>
                        <li>Profit to Drawdown ratio</li>
                        <li>Total Time in Market</li>
                    </ul>
                    It also features a real-time trading bot, which trades based on the given indicators.
                    I will start live trading as soon as this system is complete!
                    <br/>
                    <br/>
                    <a className="btn" href="https://github.com/Armanfidan/fxbot">GitHub repository</a>
                </CollapsibleCard>
                <CollapsibleCard
                    id="fyp_card" title="Dynamic Grasping with a Quadruped Mobile Manipulator" date="2022"
                    subtitle1="Imperial College London, UK"
                    subtitle2="">
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
                    <a className="btn" href={require('../../assets/af5918_final_report.pdf')}>Project
                        Thesis</a><br/><br/>
                    <a className="btn" href="https://github.com/Armanfidan/auto_grasp.git">GitHub repository</a>
                </CollapsibleCard>
                <CollapsibleCard
                    id="hlp_card" title="ISSIE Logic Simulator: Adaptive Circuit Rendering Library" date="2021"
                    subtitle1="Imperial College London, UK"
                    subtitle2="">
                    Interactive Schematic Simulator and Integrated Editor (ISSIE) is a very easy to use application
                    for digital circuit design and simulation. It is targeted at students and hobbyists that want to
                    get a grasp of Digital Electronics concepts in a simple and fun way. Issie is designed to be
                    beginner-friendly and guide the users toward their goals via clear error messages and visual clues.
                    <br/><br/>
                    For my high-level programming project at Imperial College London, I worked as part of the team
                    which built an adaptive circuit rendering library which allows users to choose logic components,
                    drop them onto the screen and connects them with wires which automatically adapt as the components
                    are moved around. This is a functional library written fully in F# and transpiled to JavaScript,
                    which replaced the old rendering library and significantly improved performance when rendering
                    components.
                    <br/><br/>
                    <a className="btn" href="https://github.com/Armanfidan/issie-draw-block">GitHub repository</a>
                </CollapsibleCard>
                <CollapsibleCard
                    id="visuaid_card" title="VisuAid" date="2020"
                    subtitle1="Imperial College London, UK"
                    subtitle2="">
                    Simple visual-based tasks, such as plotting and understanding graphs often prove difficult for the
                    visually impaired, limiting their educational prospects and contributing to high unemployment rates
                    among the blind. On top of that, blind-related technology currently available for sale also does not
                    address this issue directly, leaving an empty niche on the market.
                    <br/><br/>
                    Our project seeks to solve this by introducing a novel mechanical touch interface that allows them
                    to directly feel and understand any possible line graph (e.g. mathematical functions, statistics,
                    charts), when connected to a personal device. The input is fed into the mechanical interface via
                    the text-to-speech front- end software and translated into a function, which is then plotted and
                    displayed on the interface through linear displacements of physical dots.
                    <br/><br/>
                    <a className="btn" href={require('../../assets/af5918_final_report.pdf')}>Project
                        report</a><br/><br/>
                    <a className="btn" href="https://github.com/saucena/blind-app">GitHub repository</a>
                </CollapsibleCard>
                <CollapsibleCard
                    id="rover_card" title="Rover" date="2019"
                    subtitle1="Imperial College London, UK"
                    subtitle2="">
                    The Rover is a small rover capable of identifying and analysing various electromagnetic signals,
                    such as magnetic fields with different spins, electric fields of varying strengths, infrared signals
                    with various frequencies, and more.
                    <br/><br/>
                    The rover is remote controlled through an Android application I built using Java.
                    The application provides a control interface for the rover which allows it to be moved and directs
                    the onboard sensors to start listening to electromagnetic signals.
                    All communication is done through Wi-Fi, with a microcontroller and serial communication over the
                    network.
                    The communication interface on the microcontroller is written in C++.
                    <br/><br/>
                    <a className="btn" href="https://github.com/Armanfidan/rover">GitHub repository</a>
                </CollapsibleCard>
                <CollapsibleCard
                    id="malafatus_card" title='"Malafatus"' date="2020"
                    subtitle1="Productivity App for Android"
                    subtitle2="Independent">
                    Malafatus is an Android application that lets its users track and control their habits.
                    This app has its focus on helping its users control their habits, thus freeing their time,
                    thus increasing their productivity.
                    Furthermore, while most habit trackers are very difficult and tedious to use, which demotivates
                    their users from using the app for longer than a couple days, Malafatus is completely automatic.
                    <br/><br/>
                    The application aims to let the user keep track of the time they spend on their unwanted habits
                    every day, such as playing video games. When the user signs up, they are asked to choose the habit
                    they are aiming to eliminate.
                    Then, they can simply start a "session" at the press of a button, and end it when they have stopped
                    doing the activity that they are recording. The app will then keep track of the activity and provide
                    the user with insights.
                    <br/><br/>
                    This app was written in Java and integrates with Google Firebase to provide user authentication
                    and cloud storage for user data.
                    <br/><br/>
                    <a className="btn" href="https://github.com/Armanfidan/malafatus">GitHub repository</a>
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
                    subtitle1="Built using React and TypeScript"
                    subtitle2="">
                    This website was built with React, using libraries such as Material UI and more.
                    The swipe-based navigation system was designed and built from scratch to be intuitive.
                    Building this navigation system was difficult, but proved to be a great exercise.
                    TypeScript was chosen over JavaScript due to being strongly typed and more robust.
                    <br/><br/>
                    <a className="btn" href="https://github.com/Armanfidan/armanfidan.github.io">GitHub Repository</a>
                </CollapsibleCard>
            </div>
        </section>
    );
}

export default Software;