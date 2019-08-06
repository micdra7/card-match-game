import React from 'react';
import './Card.scss';

const Card = ({ value, set, handleClick }) => {

    const baseUrl = 'https://robohash.org/';
    
    return (
        <div className="card" onClick={handleClick}>
            <img src={baseUrl + value + '?set=set' + set} alt="robot" />
        </div>
    );
};

export default Card;