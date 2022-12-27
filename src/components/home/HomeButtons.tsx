import React from 'react';
import {Link} from "react-router-dom";
export default function HomeButtons() {
    return (
        <div className="cta">
            <a className="btn" href={require('../../assets/CV_Arman_Fidanoglu_October_2022.pdf')} target="_blank" rel="noreferrer">Download CV</a>
            <Link className="btn" to="/contact">Let's Talk</Link>
        </div>
    );
}