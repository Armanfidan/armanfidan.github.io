import React from 'react';
export default function HomeButtons() {
    return (
        <div className="profile-card-buttons">
            <a className="btn" href={require('../../assets/CV_Arman_Fidanoglu_June_2023.pdf')} target="_blank" rel="noreferrer">Download CV</a>
            <a id="go-to-contact" className="btn" href="#contact">Let's Talk</a>
        </div>
    );
}