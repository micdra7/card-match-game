import React from 'react';
import ScoreboardEntry from './ScoreboardEntry/ScoreboardEntry';
import './Scoreboard.scss';

const Scoreboard = ({propScoreboard}) => {

    let scoreboard = propScoreboard;
    scoreboard = scoreboard.sort((a, b) => {
        if (a.score < b.score) {
            return 1;
        } else if (a.score > b.score) {
            return -1;
        } else {
            return 0;
        }
    });

    const renderedScoreboard = propScoreboard === [] || propScoreboard === undefined || propScoreboard.length === 0 ? 
        <h1>Nothing to show. Play the game to get your score saved!</h1> :
        scoreboard.map(entry => (
            <ScoreboardEntry key={entry.score * entry.name.length} score={entry.score} name={entry.name} />
        ));

    return (
        <div className="scoreboard-wrapper">
            <header className="scoreboard-header">
                <h4>10 highest scores of all time:</h4>
            </header>
            <div className="scoreboard-content">
                {renderedScoreboard}
            </div>
        </div>
    );
};

export default Scoreboard;