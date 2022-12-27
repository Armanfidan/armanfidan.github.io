import React, {useState} from 'react';
import './nav.css';
import {BiHomeAlt} from 'react-icons/bi'
import {HiOutlinePencil, HiOutlineOfficeBuilding} from 'react-icons/hi'
import {FiPhone} from 'react-icons/fi'
import {IoSchoolOutline} from "react-icons/io5";
import {Outlet, Link} from "react-router-dom";

function Nav() {
    const [activeNav, setActiveNav] = useState('#home')
    return (
        <>
            <nav>
                <Link to="/" onClick={() => setActiveNav('#home')}
                      className={activeNav === '#home' ? 'active' : ''}><BiHomeAlt/></Link>
                <Link to="/education" onClick={() => setActiveNav('#education')}
                      className={activeNav === '#education' ? 'active' : ''}><IoSchoolOutline/></Link>
                <Link to="/experience" onClick={() => setActiveNav('#experience')}
                      className={activeNav === '#experience' ? 'active' : ''}><HiOutlineOfficeBuilding/></Link>
                <Link to="/projects" onClick={() => setActiveNav('#projects')}
                      className={activeNav === '#projects' ? 'active' : ''}><HiOutlinePencil/></Link>
                <Link to="/contact" onClick={() => setActiveNav('#contact')}
                      className={activeNav === '#contact' ? 'active' : ''}><FiPhone/></Link>
            </nav>
            <Outlet/>
        </>
    );
}

export default Nav;