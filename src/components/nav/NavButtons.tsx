import React from 'react';
import './nav.css';
import {IoIosArrowBack, IoIosArrowDown, IoIosArrowForward, IoIosArrowUp} from "react-icons/io";

type Props = {
    slide: [number, number];
    buttonHandles: [string, string, string, string]
}
function NavButtons(props: Props) {
    return (
        <div className="nav-buttons">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a id="prev-nav-button-horizontal" className={"nav-button" + (props.slide[1] === 1 ? "" : " disabled")}><IoIosArrowBack size="2rem"/>{props.buttonHandles[0]}</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a id="next-nav-button-horizontal" className={"nav-button" + (props.slide[1] === 1 ? "" : " disabled")}><IoIosArrowForward size="2rem"/>{props.buttonHandles[1]}</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a id="prev-nav-button-vertical" className={"nav-button" + (props.slide[0] === 1 ? "" : " disabled")}><IoIosArrowUp size="2rem"/>{props.buttonHandles[2]}</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a id="next-nav-button-vertical" className={"nav-button" + (props.slide[0] === 1 ? "" : " disabled")}><IoIosArrowDown size="2rem"/>{props.buttonHandles[3]}</a>
        </div>
    );
}

export default NavButtons;