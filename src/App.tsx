import React, {useState} from 'react';
import './App.css';

import {SwiperSlide} from "swiper/react";
import SwiperCore, { Scrollbar } from 'swiper';

import "swiper/css";
import "swiper/css/pagination";
import CustomSwiper from "./components/nav/CustomSwiper";
import NavButtons from "./components/nav/NavButtons";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Software from "./components/software/Software";
import Events from "./components/events/Events";
import Music from "./components/music/Music";
import TutorialOverlay from "./components/nav/TutorialOverlay";

SwiperCore.use([Scrollbar]);

function App() {
    const initialSlide: [number, number] = [1, 1];
    const initialButtonHandles: [string, string, string, string] = ["Events", "Home", "Music", "Contact"];
    const [slide, setSlide] = useState(initialSlide);
    const [buttonHandles, setButtonHandles] = useState(initialButtonHandles);
    const [wrongSlideChange, setWrongSlideChange] = useState(false);

    // const slideTo = (index: number) => swiper.slideTo(index);
    return (
        <div className="App">
            <TutorialOverlay/>
            <NavButtons slide={slide} buttonHandles={buttonHandles}/>
            <CustomSwiper
                id="swiper-h"
                allowTouchMove={true}
                className="swiper-h"
                direction="horizontal"
                slide={slide} setSlide={setSlide} setButtonHandles={setButtonHandles}
                wrongSlideChange={wrongSlideChange} setWrongSlideChange={setWrongSlideChange}>
                <SwiperSlide
                    data-hash="events"
                    style={slide[0] === 1 && (slide[1] === 0 || slide[1] === 2) ? {visibility: "hidden"} : {}}>
                    <Events/>
                </SwiperSlide>
                <SwiperSlide>
                    <CustomSwiper
                        id="swiper-v"
                        allowTouchMove={true}
                        className="swiper-v"
                        direction="vertical"
                        slide={slide} setSlide={setSlide} setButtonHandles={setButtonHandles}
                        wrongSlideChange={wrongSlideChange} setWrongSlideChange={setWrongSlideChange}>
                        <SwiperSlide data-hash="music"><Music/></SwiperSlide>
                        <SwiperSlide data-hash=""><Home/></SwiperSlide>
                        <SwiperSlide data-hash="contact"><Contact/></SwiperSlide>
                    </CustomSwiper>
                </SwiperSlide>
                <SwiperSlide
                    data-hash="software"
                    style={slide[0] === 1 && (slide[1] === 0 || slide[1] === 2) ? {visibility: "hidden"} : {}}>
                    <Software/>
                </SwiperSlide>
            </CustomSwiper>
        </div>
    )
        ;
}

export default App;