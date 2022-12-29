import React, {useState} from 'react';
import './App.css';

import Home from "./components/home/Home"
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import {IoIosArrowForward, IoIosArrowBack, IoIosArrowUp, IoIosArrowDown} from "react-icons/io";

export default function App() {
    const [state, setState] = useState("home");

    let homeClass: string;
    switch (state) {
        case "home":
            homeClass = "active";
            break;
        case "software":
            homeClass = "hidden_s";
            break;
        case "events":
            homeClass = "hidden_e";
            break;
        case "music":
            homeClass = "hidden_m";
            break;
        case "contact":
            homeClass = "hidden_c";
            break;
        default:
            homeClass = "";
            break;
    }

    return (
        <div id="app" className="App">
            <div id="home" className={'section ' + homeClass}>
                <Home/>
                <a href="#" className="button left" onClick={() => setState("events")}><IoIosArrowBack/>Events</a>
                <a href="#" className="button right"
                   onClick={() => setState("software")}>Software<IoIosArrowForward/></a>
                <a href="#" className="button top" onClick={() => setState("music")}><IoIosArrowUp/>Music</a>
                <a href="#" className="button bottom" onClick={() => setState("contact")}>Contact<IoIosArrowDown/></a>
            </div>
            <div id="software" className={'section ' + (state === 'software' ? 'active' : 'hidden')}>
                <Projects/>
                <a href="#" className="button left" onClick={() => setState("home")}><IoIosArrowBack/>Home</a>
            </div>
            <div id="events" className={'section ' + (state === 'events' ? 'active' : 'hidden')}>
                <Education/>
                <a href="#" className="button right" onClick={() => setState("home")}>Home<IoIosArrowForward/></a>
            </div>
            <div id="music" className={'section ' + (state === 'music' ? 'active' : 'hidden')}>
                <Experience/>
                <a href="#" className="button bottom" onClick={() => setState("home")}>Home<IoIosArrowDown/></a>
            </div>
            <div id="contact" className={'section ' + (state === 'contact' ? 'active' : 'hidden')}>
                <Contact/>
                <a href="#" className="button top" onClick={() => setState("home")}><IoIosArrowUp/>Home</a>
            </div>
            <footer>

            </footer>
        </div>
    );
}