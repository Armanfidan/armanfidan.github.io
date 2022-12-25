import React from 'react';
function Cta() {
    return (
        <div className="cta">
            <a className="btn" href={require('../../assets/CV_Arman_Fidanoglu_October_2022.pdf')} target="_blank" rel="noreferrer">Download CV</a>
            <a className="btn" href="#contact">Let's Talk</a>
        </div>
    );
}

export default Cta;