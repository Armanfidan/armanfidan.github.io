import React, {useState} from 'react';
import './nav.css';
import {BiHomeAlt} from 'react-icons/bi'
import {CgProfile} from 'react-icons/cg'
import {HiOutlinePencil, HiOutlineOfficeBuilding} from 'react-icons/hi'
import {FiPhone} from 'react-icons/fi'

function Nav() {
    const [activeNav, setActiveNav] = useState('#')
    const nav =
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHomeAlt/></a>
            <a id="aboutnav" href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><CgProfile/></a>
            <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><HiOutlinePencil/></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><HiOutlineOfficeBuilding/></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><FiPhone/></a>
        </nav>
    // const item: Element | null = document.getElementById('aboutnav')
    // if (item != null) {
    //     console.log(item)
    //     console.log(item.getAttribute('class'))
    // }
    return nav
}

export default Nav;