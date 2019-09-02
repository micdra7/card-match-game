import React from 'react';
import Timer from 'react-compound-timer'; 
import './GameScreenProperty.scss';

const GameScreenProperty = ({name, value}) => {
    return (
        <div className="game-screen-property">
            <span className="name">{`${name}: `}</span>
            <span className="value">
            {
                name !== 'Time' ?
                value.toFixed(2) : 
                <Timer>
                    <Timer.Minutes formatValue={value => `${value < 10 ? `0${value}` : value}:`} />
                    <Timer.Seconds formatValue={value => `${value < 10 ? `0${value}` : value}`} />
                </Timer>
            }
            </span>
        </div>
    );
};

export default GameScreenProperty;