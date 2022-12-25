import React from 'react';
import {BsLinkedin, BsGithub} from 'react-icons/bs'

function Socials() {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/arman-fidanoglu-86117595/"><BsLinkedin/></a>
            <a href="https://github.com/Armanfidan"><BsGithub/></a>
        </div>
    );
}

export default Socials;