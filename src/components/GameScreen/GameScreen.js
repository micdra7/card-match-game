import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { select, initializeCards } from '../../reducers/cardReducer';
import CardCollection from '../CardCollection/CardCollection';
import GameScreenProperty from './GameScreenProperty/GameScreenProperty';
import './GameScreen.scss';

export const GameScreen = ({cards, matchedCards, selectedCards, difficulty, select, initializeCards, cardIcons, time, score}) => {

    useEffect(() => {
        initializeCards(difficulty);
    }, [difficulty, initializeCards]);

    return (
        <div className="game-screen-wrapper">
            <div className="top-section">
                <GameScreenProperty name={'Time'} value={time} />
                <GameScreenProperty name={'Score'} value={score} />
            </div>
            <div className="bottom-section">
                <CardCollection cards={cards} matchedCards={matchedCards} selectedCards={selectedCards}
                    select={select} difficulty={difficulty} cardIcons={cardIcons} />
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    cards: state.cards,
    matchedCards: state.matchedCards,
    selectedCards: state.selectedCards,
    time: state.time,
    score: state.score
});

const mapDispatchToProps = {
    select,
    initializeCards
};

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);