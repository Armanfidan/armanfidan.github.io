import React from 'react';
import {BsLinkedin, BsGithub} from 'react-icons/bs'

function Socials() {
    return (
        <div className="socials">
            <a className="social" href="https://www.linkedin.com/in/armanfidan"><BsLinkedin/></a>
            <a className="social" href="https://github.com/Armanfidan"><BsGithub/></a>
        </div>
    );
}

export default Socials;