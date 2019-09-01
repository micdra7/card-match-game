import React from 'react';
import './GameScreenProperty.scss';

const GameScreenProperty = ({name, value}) => {
    return (
        <div className="game-screen-property">
            <span className="name">{`${name}: `}</span>
            <span className="value">{value.toFixed(2)}</span>
        </div>
    );
};

export default GameScreenProperty;