import React from 'react';
import './nav.css';
import {BiHomeAlt} from 'react-icons/bi'
import {HiOutlinePencil, HiOutlineOfficeBuilding} from 'react-icons/hi'
import {FiPhone} from 'react-icons/fi'
import {IoSchoolOutline} from "react-icons/io5";
import {Outlet, Link, useLocation} from "react-router-dom";

function Nav() {
    const path = useLocation().pathname;
    return (
        <>
            <nav>
                <Link to="/" className={path === '/' ? 'active' : ''}><BiHomeAlt/></Link>
                <Link to="/education" className={path === '/education' ? 'active' : ''}><IoSchoolOutline/></Link>
                <Link to="/experience" className={path === '/experience' ? 'active' : ''}><HiOutlineOfficeBuilding/></Link>
                <Link to="/projects" className={path === '/software' ? 'active' : ''}><HiOutlinePencil/></Link>
                <Link to="/contact" className={path === '/contact' ? 'active' : ''}><FiPhone/></Link>
            </nav>
            <Outlet/>
        </>
    );
}

export default Nav;