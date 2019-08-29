import React from 'react';
import ScoreboardEntry from './ScoreboardEntry/ScoreboardEntry';
import './Scoreboard.scss';

const Scoreboard = ({propScoreboard}) => {

    const scoreboard = propScoreboard;
    scoreboard.sort();

    const renderedScoreboard = propScoreboard === [] || propScoreboard === undefined || propScoreboard.length === 0 ? 
        <h1>Nothing to show. Play the game to get your score saved!</h1> :
        scoreboard.map(entry => (
            <ScoreboardEntry key={entry.score * entry.name.length} score={entry.score} name={entry.name} />
        ));

    return (
        <div className="scoreboard-wrapper">
            {renderedScoreboard}
        </div>
    );
};

export default Scoreboard;