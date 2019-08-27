import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setScore, setName } from '../../reducers/cardReducer';
import { saveToScoreboardAndReturnScore } from '../../utils/Helper';
import './ScoreboardInput.scss';

const ScoreboardInput = ({ score, name, time, setScore, setName }) => {
    
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const fullScore = score - ((Date.now() - time) / (1000 * 60 * 60 * 24 * 365)) / 2 ; 

        setScore(fullScore);
        saveToScoreboardAndReturnScore(fullScore, name);
        setRedirect(true);
    };

    const handleChange = (event) => {
        setName(event.target.value);
    };

    return (
        <div className="scoreboard-input-wrapper">
            {
                redirect || score === 0 ? <Redirect to="/" /> :
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Your name</label>
                        <input type="text" name="name" value={name} onChange={handleChange} />
                        <button type="submit">Save your score</button>
                    </form>
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        score: state.score,
        name: state.name,
        time: state.time
    };
};

const mapDispatchToProps = {
    setName,
    setScore
};

export default connect(mapStateToProps, mapDispatchToProps)(ScoreboardInput);