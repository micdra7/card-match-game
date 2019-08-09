import React from 'react';
import { connect } from 'react-redux';
import { select } from '../../reducers/cardReducer';
import Card from '../Card/Card';
import './CardCollection.scss';

const CardCollection = (props) => {
    const cards = props.cards.map((card) => {
        const cardClassName = props.matchedCards.includes(card) ? 'card invisible' : 'card';
        const handleClick = props.matchedCards.includes(card) ? () => {} : () => props.select(card.x, card.y);
        return (
            <Card key={card.value} value={card.value} set={props.set} handleClick={handleClick} className={cardClassName} />
        );
    });

    const style = {
        width: props.cards.length / (props.difficulty * 2)  * 200 + 'px',
        height: props.cards.length / (props.difficulty * 2) * 200 + 'px'
    };

    return (
        <div className="card-collection" style={style}>
            {cards}
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
    select
};

export default connect(mapStateToProps, mapDispatchToProps)(CardCollection);