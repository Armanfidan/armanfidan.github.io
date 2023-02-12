import React from 'react';
import './nav.css';
import {MdSwipe} from "react-icons/md";

export default function TutorialOverlay() {
    function handleDisappearing() {
        const element = document.getElementById('tutorial-overlay');
        if (!element) return;
        element.style.setProperty('display', 'none');
    }

    return (
        <div id="tutorial-overlay" onClick={handleDisappearing}>
            <MdSwipe style={{fontSize: '2rem'}}/>
            <b>
            Swipe anywhere to navigate pages
            <br/>
            Tap anywhere to continue
            </b>
        </div>
    );
}