import React, {useCallback, useRef, useState} from 'react';
import './App.css';

import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, HashNavigation} from "swiper";

import "swiper/css";
import "swiper/css/pagination";

function App() {
    const [state, _] = useState("#");
    console.log(state);
    return (
        <div className="App">
            <a href="#" id="prev-vertical" className={state === "#" ? "" : "nav-button-disabled"}>Prev</a>
            <a href="#" id="next-vertical">Next</a>
            <Swiper
                className="mySwiper swiper-h"
                spaceBetween={0}
                initialSlide={1}
                modules={[Navigation, HashNavigation]}
                navigation={true}
                hashNavigation={{
                    watchState: true,
                }}
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
                    >
                        <SwiperSlide data-hash="music">Vertical Slide 3</SwiperSlide>
                        <SwiperSlide data-hash="">Vertical Slide 2</SwiperSlide>
                        <SwiperSlide data-hash="contact">Vertical Slide 1</SwiperSlide>

                    </Swiper>
                </SwiperSlide>
                <SwiperSlide data-hash="software">Horizontal Slide 3</SwiperSlide>
            </Swiper>
        </div>
    );
}

export default App;
