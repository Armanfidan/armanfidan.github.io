import React, {useState} from 'react';
import './App.css';

import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, HashNavigation} from "swiper";

import "swiper/css";
import "swiper/css/pagination";

function App() {
    const [slide, setSlide] = useState([1, 1]);

    // const slideTo = (index: number) => swiper.slideTo(index);
    return (
        <div className="App">
            <a href="#" id="prev-horizontal" className={slide[1] === 1 ? "" : "nav-button-disabled"}>Prev</a>
            <a href="#" id="next-horizontal" className={slide[1] === 1 ? "" : "nav-button-disabled"}>Next</a>
            <a href="#" id="prev-vertical" className={slide[0] === 1 ? "" : "nav-button-disabled"}>Prev</a>
            <a href="#" id="next-vertical" className={slide[0] === 1 ? "" : "nav-button-disabled"}>Next</a>
            <Swiper
                className="mySwiper swiper-h"
                spaceBetween={0}
                initialSlide={1}
                modules={[Navigation, HashNavigation]}
                navigation={{
                    enabled: true,
                    nextEl: '#next-horizontal',
                    prevEl: '#prev-horizontal',
                    disabledClass: 'nav-button-disabled'
                }}
                hashNavigation={{
                    watchState: true,
                }}
                onSlideChange={(index) => setSlide([index.snapIndex, slide[1]])}
            >
                <SwiperSlide data-hash="events">Horizontal Slide 1</SwiperSlide>
                <SwiperSlide>
                    <Swiper
                        className="swiper-v"
                        direction={"vertical"}
                        spaceBetween={0}
                        initialSlide={1}
                        modules={[Navigation, HashNavigation]}
                        navigation={{
                            enabled: true,
                            nextEl: '#next-vertical',
                            prevEl: '#prev-vertical',
                            disabledClass: 'nav-button-disabled'
                        }}
                        hashNavigation={{
                            watchState: true,
                        }}
                        onSlideChange={(index) => setSlide([slide[0], index.snapIndex])}
                    >
                        <SwiperSlide data-hash="music">Vertical Slide 1</SwiperSlide>
                        <SwiperSlide data-hash="">Vertical Slide 2</SwiperSlide>
                        <SwiperSlide data-hash="contact">Vertical Slide 3</SwiperSlide>

                    </Swiper>
                </SwiperSlide>
                <SwiperSlide data-hash="software">Horizontal Slide 3</SwiperSlide>
            </Swiper>
        </div>
    );
}

export default App;
