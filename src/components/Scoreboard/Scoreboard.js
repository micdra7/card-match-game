import React from 'react';
import { getScoreboard } from '../../utils/Helper';
import './Scoreboard.scss';

const Scoreboard = () => {

    const scoreboard = getScoreboard();
    scoreboard.sort();

    const renderedScoreboard = scoreboard !== [] ? scoreboard.map(score => (
        <div key={score.score * score.name.length} className="scoreboard-entry">
            <span className="name">
                {score.name}
            </span>
            <span className="score">
                {score.score}
            </span>
        </div>
    )) : <></>;

    return (
        <div className="scoreboard-wrapper">
            {renderedScoreboard}
        </div>
    );
};

export default Scoreboard;