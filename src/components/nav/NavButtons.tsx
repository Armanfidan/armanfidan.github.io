import React from 'react';
import './nav.css';

type Props = {
    slide: [number, number];
    buttonHandles: [string, string, string, string]
}
function NavButtons(props: Props) {
    return (
        <div className="nav-buttons">
            <a href="#" id="prev-nav-button-horizontal" className={"nav-button" + (props.slide[1] === 1 ? "" : " disabled")}>{props.buttonHandles[0]}</a>
            <a href="#" id="next-nav-button-horizontal" className={"nav-button" + (props.slide[1] === 1 ? "" : " disabled")}>{props.buttonHandles[1]}</a>
            <a href="#" id="prev-nav-button-vertical" className={"nav-button" + (props.slide[0] === 1 ? "" : " disabled")}>{props.buttonHandles[2]}</a>
            <a href="#" id="next-nav-button-vertical" className={"nav-button" + (props.slide[0] === 1 ? "" : " disabled")}>{props.buttonHandles[3]}</a>
        </div>
    );
}

export default NavButtons;