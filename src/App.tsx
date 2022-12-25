import React from 'react';

import Home from "./components/home/Home";
import Education from "./components/education/Education";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";

import './App.css';
import Projects from "./components/projects/Projects";

function App() {
    return (
        <div className="App">
            <Home/>
            <Nav/>
            <Education/>
            <Experience/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
