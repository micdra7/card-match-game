import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Card.scss';

const Card = ({ value, handleClick, className }) => {

    return (
        <div className={className} onClick={handleClick}>
            <div className="svg-wrapper">
                <FontAwesomeIcon icon={value} />
            </div>
        </div>
    );
};

export default Card;