import React from 'react';
export default function HomeButtons() {
    return (
        <div className="profile-card-buttons">
            <a className="btn" href={require('../../assets/CV_Arman_Fidanoglu_October_2022.pdf')} target="_blank" rel="noreferrer">Download CV</a>
            <a className="btn" href="#contact">Let's Talk</a>
        </div>
    );
}