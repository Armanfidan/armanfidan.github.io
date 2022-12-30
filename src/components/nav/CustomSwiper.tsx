import React, {ReactElement} from 'react';
import {Swiper} from "swiper/react";
import {HashNavigation, Navigation} from "swiper";
import {Swiper as SwiperClass} from 'swiper/types';
import './nav.css';

type Props = {
    className: string;
    direction: "vertical" | "horizontal";
    slide: [number, number];
    setSlide: (slide: [number, number]) => void;
    setButtonHandles: (handles: [string, string, string, string]) => void;
    children: React.ReactNode | ReactElement;
};

function CustomSwiper(props: Props) {
    const delay = async (time: number) => {
        await new Promise(resolve => setTimeout(resolve, time));
    }
    const updateButtonHandles = (newSlide: [number, number]) => {
        switch (newSlide.join(',')) {
            case '0,1':
                props.setButtonHandles(["Events", "Home", "Music", "Contacts"]);
                break;
            case '1,1':
                props.setButtonHandles(["Events", "Software", "Music", "Contacts"]);
                break;
            case '2,1':
                props.setButtonHandles(["Home", "Software", "Music", "Contacts"]);
                break;
            case '1,0':
                props.setButtonHandles(["Events", "Software", "Music", "Home"]);
                break;
            case '1,2':
                props.setButtonHandles(["Events", "Software", "Home", "Contacts"]);
                break;
            default: break;
        }
    }
    return (
        <Swiper
            className={props.className}  // + (props.direction === 'horizontal' && props.slide[0] === 1 && (props.slide[1] === 0 || props.slide[1] === 2) ? " swiper-no-swiping" : "")
            direction={props.direction}
            spaceBetween={0}
            initialSlide={1}
            modules={[Navigation, HashNavigation]}
            navigation={{
                enabled: true,
                nextEl: "#next-nav-button-" + props.direction,
                prevEl: "#prev-nav-button-" + props.direction,
                disabledClass: "nav-button-disabled"
            }}
            hashNavigation={{
                watchState: true,
            }}
            onSlideChange={(index: SwiperClass) => {
                const nested_condition: boolean = props.slide[0] === 1 && (props.slide[1] === 0 || props.slide[1] === 2);
                if (props.direction === 'horizontal' && nested_condition)
                    index.slideTo(1);
                let newSlide: [number, number];
                if (props.direction === "horizontal")
                    newSlide = [index.snapIndex, props.slide[1]];
                else
                    newSlide = [props.slide[0], index.snapIndex];
                props.setSlide(newSlide);
                updateButtonHandles(newSlide);
            }}
        >
            {props.children}
        </Swiper>
    );
}

export default CustomSwiper;