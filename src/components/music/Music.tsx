import React, {TouchEvent} from 'react';
import '../home/home.css';
import './music.css';
import {useSwiper} from "swiper/react";

export default function Music() {
    const verticalSwiper = useSwiper();
    const musicContainer = document.getElementById('music-container');
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
        if (!musicContainer || !verticalSwiper) return;
        initial_position = event.touches[0].clientY;
        initial_move = true;
        scrollTop = musicContainer.scrollTop;
        offsetHeight = musicContainer.offsetHeight;
        scrollHeight = musicContainer.scrollHeight;
    }
    const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
        if (!musicContainer || !verticalSwiper || !initial_move) return;
        initial_move = false;
        final_position = event.touches[0].clientY;
        const touch_delta = final_position - initial_position;
        const direction: 'up' | 'down' = touch_delta > 0 ? 'up' : 'down';
        console.log(touch_delta);
        console.log(direction);
        console.log(scrollTop + offsetHeight)
        console.log(scrollHeight)
        if ((scrollTop + offsetHeight + 0.5 >= scrollHeight && direction === 'down')) {  // At the bottom scrolling down
            enableSlideMovement(true);
        } else if ((scrollTop <= 0 && direction === 'up') ||  // At the top scrolling up
            (scrollTop === 0 && direction === 'down') ||  // At the top scrolling down
            (scrollTop > 0 && scrollTop + offsetHeight < scrollHeight) ||  // In the middle
            (scrollTop + offsetHeight >= scrollHeight && direction === 'up')) {  // At the bottom scrolling up
            enableSlideMovement(false)
            verticalSwiper.slideTo(0);
        }
    }

    const next = document.getElementById('next-nav-button-vertical');
    if (next) next.addEventListener('click', () => enableSlideMovement(true));

    return (
        <div id="music-container" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
            <div className="about-container">
                <h1>A big year for music!</h1>
                <p>
                    I have always been a fervent lover of music, from when I received my classical piano training in the
                    MSGSU State Conservatory in Istanbul,
                    all the way to now building my record collection, playing the guitar and learning Jazz piano.
                </p>
                <p>
                    However, it had not occurred to me until this year to combine this passion for music with
                    technology, in
                    electronic music.
                    I went to a LOT of electronic music events last year, and realised how much of an effect these
                    sounds
                    can have on people.
                    I figured this out because of the effect it had on me.
                </p>
                <p>
                    This realisation led to me picking up electronic music production.
                    After months of learning about this incredible and huge discipline, I realised that I could combine
                    it
                    with piano and... a bit of Jazz? Yeah!
                </p>
                <p>
                    Thus, now I am focusing my efforts on producing electronic music (mostly tech house) influenced by
                    and
                    containing elements of jazz.
                    But don't let me tell you about it - listen to it yourself and let me know what you think!
                </p>
            </div>
            <div className="about-container">
                <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay"
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1687220250&color=%23ad8500&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false"></iframe>
                <br/><br/>
                <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay"
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1686982074&color=%23000000&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false"></iframe>
                <br/><br/>
                <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay"
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1686750855&color=%2300c5de&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false"></iframe>
            </div>
        </div>
    );
}
