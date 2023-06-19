import React, {TouchEvent} from 'react';
import './home.css';
import Socials from "./socials";
import HomeButtons from "./HomeButtons";
import {useSwiper} from "swiper/react";

function Home() {
    const verticalSwiper = useSwiper();
    const homeContainer = document.getElementById('home-container');
    let initial_position: number;
    let final_position: number;
    let initial_move: boolean;
    let scrollTop: number;
    let offsetHeight: number;
    let scrollHeight: number;

    const enableSlideMovement = (enable: boolean) => {
        verticalSwiper.allowTouchMove = enable;
        verticalSwiper.allowSlideNext = enable;
        verticalSwiper.allowSlidePrev = enable;
    }

    const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
        if (!homeContainer || !verticalSwiper) return;
        initial_position = event.touches[0].clientY;
        initial_move = true;
        scrollTop = homeContainer.scrollTop;
        offsetHeight = homeContainer.offsetHeight;
        scrollHeight = homeContainer.scrollHeight;
    }
    const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
        if (!homeContainer || !verticalSwiper || !initial_move) return;
        initial_move = false;
        final_position = event.touches[0].clientY;
        const touch_delta = final_position - initial_position;
        const direction: 'up' | 'down' = touch_delta > 0 ? 'up' : 'down';
        if ((scrollTop <= 0 && direction === 'up') ||  // At the top scrolling up
            (scrollTop + offsetHeight >= scrollHeight && direction === 'down')) {  // At the bottom scrolling down
            enableSlideMovement(true);
        } else if ((scrollTop === 0 && direction === 'down') ||  // At the top scrolling down
            (scrollTop > 0 && scrollTop + offsetHeight < scrollHeight) ||  // In the middle
            (scrollTop + offsetHeight === scrollHeight && direction === 'up')) {  // At the bottom scrolling up
            enableSlideMovement(false)
            verticalSwiper.slideTo(1);
        }
    }

    const prev = document.getElementById('prev-nav-button-vertical');
    if (prev) prev.addEventListener('click', () => enableSlideMovement(true));
    const next = document.getElementById('next-nav-button-vertical');
    if (next) next.addEventListener('click', () => enableSlideMovement(true));
    const cont = document.getElementById('go-to-contact');
    if (cont) cont.addEventListener('click', () => enableSlideMovement(true));

    return (
        <div id="home-container" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
            <div className="container profile-card">
                <div className="profile-picture">
                    <img src={require("../../assets/me.png")} alt="Me"/>
                </div>
                <h2>Arman Fidanoglu</h2>
                <h4 className="text-light">Software Engineer</h4>
                <HomeButtons/>
                <Socials/>
            </div>
            <hr className="divider"/>
            <div className="about-container">
                <h1>Glad you're here.<br/>Here's who I am.</h1>
                <p>
                    I’m a software engineer with experience in machine learning, systems design and frontend development.
                    The thing I like the most about myself is that I'm never satisfied with what I know -
                    I have to keep learning and using new technologies.
                    <br/><br/>
                    My biggest love in life is music, whether it be creating, listening or experiencing live.
                    I love producing music and playing guitar, but raving is just as amazing.
                    On top of this, I am a co-founder of AYA Nights, an events managements initiative aiming to bring
                    similar people together in a nightclub setting. To summarise, here’s what I do:
                    Designing and building things. Whether it be software, music or occasions to bring people together.
                </p>
            </div>
        </div>
    );
}

export default Home;