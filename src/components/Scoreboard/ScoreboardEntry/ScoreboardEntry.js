import React from 'react';
import './ScoreboardEntry.scss';

const ScoreboardEntry = ({ name, score }) => (
    <div className="scoreboard-entry">
        <span className="name">
            {`${name}: `}
        </span>
        <span className="score">
            {score.toFixed(2)}
        </span>
    </div>
);

export default ScoreboardEntry;