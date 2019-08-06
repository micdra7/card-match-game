import React from 'react';
import './Card.scss';

const Card = ({ value, set }) => {

    const baseUrl = 'https://robohash.org/';
    
    return (
        <div className="card">
            <img src={baseUrl + value + '?set=set' + set} alt="robot" />
        </div>
    );
};

export default Card;