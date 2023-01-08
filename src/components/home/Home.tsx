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
        if ((scrollTop === 0 && direction === 'up') ||
            (scrollTop + offsetHeight === scrollHeight && direction === 'down')) {
            verticalSwiper.allowTouchMove = true;
            verticalSwiper.allowSlideNext = true;
            verticalSwiper.allowSlidePrev = true;
        } else if ((scrollTop === 0 && direction === 'down') ||
            (scrollTop !== 0 && scrollTop + offsetHeight !== scrollHeight) ||
            (scrollTop + offsetHeight === scrollHeight && direction === 'up')) {
            verticalSwiper.allowTouchMove = false;
            verticalSwiper.allowSlideNext = false;
            verticalSwiper.allowSlidePrev = false;
        }
    }

    return (
        <div id="home-container" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
            <div className="container profile-card">
                <div className="profile-picture">
                    <img src={require("../../assets/me.jpg")} alt="Me"/>
                </div>
                <h2>Arman Fidanoglu</h2>
                <h4 className="text-light">Software Engineer</h4>
                <HomeButtons/>
                <Socials/>
            </div>
            <hr className="divider"/>
            <div className="about-container">
                <h1>Glad you're here.<br/>Here's who I am.</h1>
                <p>I'm a recent Electrical and Electronic Engineering graduate from Imperial College London, and
                    currently a Technology Analyst at Credit Suisse.
                    The thing I like the most about myself is that I'm never satisfied with what I know - I have to
                    keep
                    learning and using new technologies.
                    <br/><br/>
                    I also enjoy playing the piano and guitar, producing music, snowboarding and wakeboarding, and
                    most
                    importantly, going to techno raves.
                    Oh and I love beta testing stuff - sometimes I make my devices unusable though:(
                </p>
            </div>
        </div>
    );
}

export default Home;