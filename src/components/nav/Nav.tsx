import React, {useState} from 'react';
import './nav.css';
import {BiHomeAlt} from 'react-icons/bi'
import {CgProfile} from 'react-icons/cg'
import {HiOutlinePencil, HiOutlineOfficeBuilding} from 'react-icons/hi'
import {FiPhone} from 'react-icons/fi'
import {IoSchoolOutline} from "react-icons/io5";

import Education from "../education/Education";
import Experience from "../experience/Experience";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
import Home from "../home/Home";

function Nav() {
    const [activeNav, setActiveNav] = useState('#home')
    const nav =
        <nav>
            <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><BiHomeAlt/></a>
            <a href="#education" onClick={() => setActiveNav('#education')} className={activeNav === '#education' ? 'active' : ''}><IoSchoolOutline/></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><HiOutlineOfficeBuilding/></a>
            <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><HiOutlinePencil/></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><FiPhone/></a>
        </nav>
    return <div>
        {nav}
        {activeNav === '#home' ? <Home/> : <div/>}
        {activeNav === '#education' ? <Education/> : <div/>}
        {activeNav === '#experience' ? <Experience/> : <div/>}
        {activeNav === '#projects' ? <Projects/> : <div/>}
        {activeNav === '#contact' ? <Contact/> : <div/>}
    </div>
}

export default Nav;