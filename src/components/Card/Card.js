import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Card.scss';

const Card = ({ value, handleClick, className, cardSize }) => {   
    const style = {width: `${cardSize}px`, height: `${cardSize}px`};

    return (
        <div className={className} onClick={handleClick}>
            <div className="svg-wrapper">
                <FontAwesomeIcon icon={value} style={style}/>
            </div>
        </div>
    );
};

export default Card;