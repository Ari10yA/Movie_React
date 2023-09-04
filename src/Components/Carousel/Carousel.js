import React, { useEffect, useState } from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { img_300, noPicture } from "../../Configg/Configg";
import axios from "axios";
import "./Carousel.css"

const handleDragStart = (e) => e.preventDefault();

const Carousel = ({ id, media }) => {

    const [credits, setCredits] = useState([]);

    const responsive = {
        0: {
          items: 3,
        },
        512: {
          items: 5,
        },
        1024: {
          items: 7,
        },
    };

    const fetchCredits = async () => {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/${media}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        );
        console.log(data);
        setCredits(data.cast);
      };
    
      useEffect(() => {
        fetchCredits();
        // eslint-disable-next-line
      }, []);

    const items = credits.map((c) => (
        <div className="carouselItem">
          <img
            src={c.profile_path ? `${img_300}/${c.profile_path}` : noPicture}
            alt={c?.name}
            onDragStart={handleDragStart}
            className="carouselItem__img"
          />
          <b className="carouselItem__txt">{c?.name}</b>
        </div>
      ));


  return (
    <AliceCarousel 
    mouseTracking  
    disableButtonsControls
    responsive={responsive}
    items={items}
 
    />
  );
}

export default Carousel;