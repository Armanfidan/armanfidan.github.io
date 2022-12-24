import React from 'react';

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Nav from "./components/nav/Nav";

import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header/>
            <About/>
            <Nav/>
            <Experience/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
