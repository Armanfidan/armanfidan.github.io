import React, {useEffect, useState} from 'react';
import './App.css';

import {SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import CustomSwiper from "./components/nav/CustomSwiper";
import NavButtons from "./components/nav/NavButtons";

function App() {
    const initialSlide: [number, number] = [1, 1];
    const initialButtonHandles: [string, string, string, string] = ["Events", "Home", "Music", "Contacts"];
    const [slide, setSlide] = useState(initialSlide);
    const [buttonHandles, setButtonHandles] = useState(initialButtonHandles);

    // const slideTo = (index: number) => swiper.slideTo(index);
    return (
        <div className="App">
            {slide ? <NavButtons slide={slide} buttonHandles={buttonHandles}/> : <></>}
            <CustomSwiper
                className="swiper-h"
                direction="horizontal"
                slide={slide}
                setSlide={setSlide}
                setButtonHandles={setButtonHandles}>
                <SwiperSlide data-hash="events">Events</SwiperSlide>
                <SwiperSlide>
                    <CustomSwiper
                        className="swiper-v"
                        direction="vertical"
                        slide={slide}
                        setSlide={setSlide}
                        setButtonHandles={setButtonHandles}>
                        <SwiperSlide data-hash="music">Music</SwiperSlide>
                        <SwiperSlide data-hash="">Home</SwiperSlide>
                        <SwiperSlide data-hash="contact">Contact</SwiperSlide>
                    </CustomSwiper>
                </SwiperSlide>
                <SwiperSlide data-hash="software">Software</SwiperSlide>
            </CustomSwiper>
        </div>
    )
        ;
}

export default App;
