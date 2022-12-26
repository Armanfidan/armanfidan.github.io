import * as React from 'react';
import {styled} from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import IconButton, {IconButtonProps} from '@mui/material/IconButton';
import {IoIosArrowDown} from "react-icons/io";
import {ReactElement} from "react";

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const {expand, ...other} = props;
    return <IconButton disableRipple {...other} />;
})(({theme, expand}) => ({
    transform: 'scale(1.2) ' + (!expand ? 'rotate(0deg)' : 'rotate(90deg)'),
    marginLeft: 'auto',
    color: "white",
    transition: theme.transitions.create('transform', {
        duration: "300ms"
    }),
    "&:hover": {
        background: "none",
        color: "var(--colour-primary)"
    },
    "&:active": {
        background: "none"
    }
}));

type Props = {
    id: string;
    title: string;
    subtitle1: string;
    subtitle2: string;
    children: React.ReactNode | ReactElement;
}

export default function CollapsibleCard(props: Props) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className="education_card" id={props.id} sx={{
            borderRadius: "2rem 2.2rem 2.2rem 2rem",
            boxShadow: "0 0 30px 1px black",
            position: "relative",
            backgroundAttachment: "revert",
            backgroundSize: "cover",
            backgroundPosition: "left",
            overflow: "hidden",
        }}>
            <article className="education__card" id={props.id + "_inner"}>
                <div></div>
                <CardContent>
                    <div>
                        <h3>{props.title}</h3>
                        {props.subtitle1 !== "" ? <small>{props.subtitle1}</small> : <></>}
                        {(props.subtitle1 !== "") && (props.subtitle2 !== "") ? <br/> : <></>}
                        {props.subtitle2 !== "" ? <small>{props.subtitle2}</small> : <></>}
                    </div>
                </CardContent>
                <ExpandMore expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"><IoIosArrowDown/>
                </ExpandMore>
                <div></div>
                <Collapse in={expanded} timeout={300} unmountOnExit>
                    <CardContent>
                        {props.children}
                    </CardContent>
                </Collapse>
            </article>
        </Card>
    );
}