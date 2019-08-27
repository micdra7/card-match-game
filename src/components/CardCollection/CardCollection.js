import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { select, initializeCards } from '../../reducers/cardReducer';
import Card from '../Card/Card';
import './CardCollection.scss';

const CardCollection = ({ cards, matchedCards, selectedCards, difficulty, set, select, initializeCards }) => {

    useEffect(() => {
        initializeCards(difficulty);
    }, [initializeCards, difficulty]);

    const renderedContent = cards.length === 0 ? <Redirect to="/scoreboard/input" /> : cards.map((card, index) => {
        const cardClassName = matchedCards.includes(card) ? 'card invisible' : selectedCards.includes(card) ? 'card visible' : 'card';
        const handleClick = matchedCards.includes(card) ? () => {} : () => select(card.x, card.y);
        const cardStyle = {width: `${100/(difficulty*2)}%`, height: `${100/(difficulty*2)}%`};

        return (
            <Card style={cardStyle} key={card.value * index + set} value={card.value} set={set} handleClick={handleClick} className={cardClassName} />
        );
    });

    let gridForDifficulty = '';

    for (let i = 0; i <= difficulty; i++) {
        gridForDifficulty += `${(100/(difficulty*2)).toFixed(2)}% `;
    }

    const style = {
        gridTemplateColumns: gridForDifficulty,
        gridTemplateRows: gridForDifficulty
    };

    return (
        <div className="card-collection" style={style}>
            {renderedContent}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        cards: state.cards,
        matchedCards: state.matchedCards,
        selectedCards: state.selectedCards,
        set: state.set
    };
};

const mapDispatchToProps = {
    select,
    initializeCards
};

export default connect(mapStateToProps, mapDispatchToProps)(CardCollection);