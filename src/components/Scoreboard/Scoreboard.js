import React from 'react';
import ScoreboardEntry from './ScoreboardEntry/ScoreboardEntry';
import { getScoreboard } from '../../utils/Helper';
import './Scoreboard.scss';

const Scoreboard = () => {

    const scoreboard = getScoreboard();
    scoreboard.sort();

    const renderedScoreboard = scoreboard !== [] ? scoreboard.map(entry => (
        <ScoreboardEntry key={entry.score * entry.name.length} score={entry.score} name={entry.name} />
    )) : <h1>Nothing to show. Play the game to get your score saved!</h1>;

    return (
        <div className="scoreboard-wrapper">
            {renderedScoreboard}
        </div>
    );
};

export default Scoreboard;