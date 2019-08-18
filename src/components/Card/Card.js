import React from 'react';
import './Card.scss';

const Card = ({ value, set, handleClick, className }) => {

    const baseUrl = 'https://robohash.org/';
    
    return (
        <div className={className} onClick={handleClick}>
            <img alt="robot" src={`${baseUrl + value}?set=set${set}&size=200x200`} />
        </div>
    );
};

export default Card;