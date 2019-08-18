import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { select, initializeCards } from '../../reducers/cardReducer';
import Card from '../Card/Card';
import './CardCollection.scss';

const CardCollection = ({ cards, matchedCards, difficulty, set, select, initializeCards }) => {

    useEffect(() => {
        initializeCards(1);
    }, [initializeCards]);

    const renderedCards = cards.map((card, index) => {
        const cardClassName = matchedCards.includes(card) ? 'card invisible' : 'card';
        const handleClick = matchedCards.includes(card) ? () => {} : () => select(card.x, card.y);

        return (
            <Card key={card.value * index + set} value={card.value} set={set} handleClick={handleClick} className={cardClassName} />
        );
    });

    const style = {
        width: cards.length / (difficulty * 2)  * 200 + 'px',
        height: cards.length / (difficulty * 2) * 200 + 'px'
    };

    return (
        <div className="card-collection" style={style}>
            {renderedCards}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        cards: state.cards,
        matchedCards: state.matchedCards,
        difficulty: state.difficulty,
        set: state.set
    };
};

const mapDispatchToProps = {
    select,
    initializeCards
};

export default connect(mapStateToProps, mapDispatchToProps)(CardCollection);