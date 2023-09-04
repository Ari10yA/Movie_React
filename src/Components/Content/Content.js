import React from "react";
import { img_300, unavailable} from "../../Configg/Configg";
import  "./Content.css";
import Cmodal from "../CModal/Cmodal";
import { Badge } from "@material-ui/core";
import Rating from '@mui/material/Rating';

const Content = (props) => {

    return(
        <Cmodal media={props.media} id={props.id}>
            <Badge overlap="rectangular" badgeContent={props.vote_avg.toFixed(1)} color="primary"></Badge>
            <img className="poster" src={ props.poster ? `${img_300}/${props.poster}` : unavailable} alt={props.title} />
            <b className="title">{props.title}</b>
            <span className="subTitle">
                {props.media==='tv' ? "Tv-Series" : "Movie"}
            </span>
            <span className="subTitle"> Language : {props.language}</span>
            <span className="subTitle"> Release : {props.date}</span>
            <Rating name="half-rating" defaultValue={props.vote_avg} precision={0.5} />
        </Cmodal>
    );
    
};

export default Content;