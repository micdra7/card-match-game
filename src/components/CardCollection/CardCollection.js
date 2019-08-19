import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { select, initializeCards } from '../../reducers/cardReducer';
import Card from '../Card/Card';
import ScoreboardInput from '../ScoreboardInput/ScoreboardInput';
import './CardCollection.scss';

const CardCollection = ({ cards, matchedCards, difficulty, set, select, initializeCards }) => {

    useEffect(() => {
        initializeCards(difficulty);
    }, [initializeCards, difficulty]);

    const renderedContent = cards.length === 0 ? <ScoreboardInput /> : cards.map((card, index) => {
        const cardClassName = matchedCards.includes(card) ? 'card invisible' : 'card';
        const handleClick = matchedCards.includes(card) ? () => {} : () => select(card.x, card.y);
        const cardStyle = {width: `${100/(difficulty*2)}%`, height: `${100/(difficulty*2)}%`};

        return (
            <Card style={cardStyle} key={card.value * index + set} value={card.value} set={set} handleClick={handleClick} className={cardClassName} />
        );
    });

    const gridForDifficulty = ['50% 50%', '25% 25% 25% 25%', 
        '16.67% 16.67% 16.67% 16.67% 16.67% 16.67%', '12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5%']

    const style = {
        gridTemplateColumns: gridForDifficulty[difficulty-1],
        gridTemplateRows: gridForDifficulty[difficulty-1]
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
        set: state.set
    };
};

const mapDispatchToProps = {
    select,
    initializeCards
};

export default connect(mapStateToProps, mapDispatchToProps)(CardCollection);