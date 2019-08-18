import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './Card.scss';

const Card = ({ value, set, handleClick, className }) => {

    const baseUrl = 'https://robohash.org/';
    
    return (
        <div className={className} onClick={handleClick}>
            <LazyLoadImage alt="robot" src={`${baseUrl + value}?set=set${set}&size=200x200`} effect="blur" />
        </div>
    );
};

export default Card;