import React, {useEffect, useState} from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import axios from "axios";
import {img_300, noPicture} from "../config/config";
import './Carousel.css';

const handleDragStart = (e) => e.preventDefault();


const Carousel = ({content_type, id, media_type}) => {
    const [credits, setCredits] = useState([]);
    const items = credits?.map((c) => (
            <div className="carousel__item">
                <img src={c.profile_path ? `${img_300}/${c.profile_path}` : noPicture}
                     alt={c?.name}
                     className={'carousel__item_img'}
                     onDragStart={handleDragStart}
                    // role="presentation"
                />
                <b className={"carousel__item_text"}>{c?.name}</b>
            </div>
        ));



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


    function getCredits() {
        axios({
            method: "GET",
            url: `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
        }).then(response => {
            setCredits(response.data.cast ?? []);
        })

    }

    useEffect(() => {
        getCredits();
    }, [])

    return (
        <AliceCarousel
            mouseTracking
            fadeOutAnimation={true}
            activeIndex={-2}
            items={items}
            autoWidth={true}
            autoPlay
            animationDuration={1400}
            disableButtonsControls
            disableDotsControls
            animationType={"fadeout"}
            responsive={responsive}
        />
    );
}

export default Carousel;