import React from 'react';
import './header.css';
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

function Header() {
    return (
        <div>
            <header>
                <div className="container header__container">
                    <h1>Arman Fidanoglu</h1>
                    <h5 className="text-light">Software Engineer</h5>
                    <CTA/>
                    <HeaderSocials/>
                </div>
            </header>
        </div>
    );
}

export default Header;