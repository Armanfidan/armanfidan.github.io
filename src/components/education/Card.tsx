import React, {FunctionComponent, useState, useEffect, useCallback} from 'react';
import {IoIosArrowDown} from "react-icons/io";

type Props = {
    id: string;
    title: string;
    subtitle: string;
    content: string;
}

const Card: FunctionComponent<Props> = (props) => {
    const [expanded, setExpanded] = useState(false)
    const [height, setHeight] = useState(0)

    useEffect(() => {
        if (height === 0 && !expanded) {
            let card = document.getElementById(props.id);
            const inner_card: HTMLElement | null = document.getElementById(props.id + "_inner");
            let extra = document.getElementById(props.id + "_content");
            if (card && inner_card && extra) {
                setHeight(card.scrollHeight);
                extra.style.setProperty("top", height.toString() + "px")
            }
        }
    }, [expanded, props, height, setHeight]);
    let handleClick = (content_height: number) => {
        const card: HTMLElement | null = document.getElementById(props.id);
        const inner_card: HTMLElement | null = document.getElementById(props.id + "_inner");
        if (card == null || inner_card == null) return;
        if (!expanded) {
            setExpanded(true);
            card.style.setProperty("height", height.toString() + "px");
            inner_card.style.setProperty("height", height.toString() + "px");
        } else {
            setExpanded(false);
            card.style.setProperty("height", (height - content_height - 54).toString() + "px");
            inner_card.style.setProperty("height", (height - content_height - 54).toString() + "px");
        }
    }


    return (
        <div className="education_card_shadow">
            <div className={"education__card_bg" + (expanded ? " expanded" : "")} id={props.id}>
                <article className={"education__card" + (expanded ? " expanded" : "")} id={props.id + "_inner"}>
                    <div></div>
                    <div>
                        <h3>{props.title}</h3>
                        <small>{props.subtitle}</small>
                        <div className="content" id={props.id + "_content"}><small>{props.content}</small></div>
                    </div>
                    <a className={"expand-btn" + (expanded ? " expanded" : "")} onClick={() => {
                        let extra = document.getElementById(props.id + "_content");
                        if (extra) handleClick(extra.scrollHeight);
                    }}><IoIosArrowDown/></a>
                </article>
            </div>
        </div>
    );
}

export default Card;