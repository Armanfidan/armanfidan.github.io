import React from 'react';
import './App.css';
import {HashRouter, Routes, Route} from "react-router-dom";

import Home from "./components/home/Home"
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Nav from "./components/nav/Nav";

export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Nav/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/education" element={<Education/>}/>
                    <Route path="/experience" element={<Experience/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="*" element={<Home/>}/>
                </Route>
            </Routes>
        </HashRouter>
    );
}