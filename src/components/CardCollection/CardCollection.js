import React from 'react';
import { connect } from 'react-redux';
import { select } from '../../reducers/cardReducer';
import Card from '../Card/Card';
import './CardCollection.scss';

const CardCollection = (props) => {
    const cards = props.cards.map((card) => {
        const cardClassName = props.matchedCards.includes(card) ? 'card invisible' : 'card';
        return (
            <Card key={card.value} value={card.value} set={props.set} handleClick={() => props.select(card.x, card.y)} className={cardClassName} />
        );
    });

    return (
        <div className="card-collection">
            {cards}
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
    select
};

export default connect(mapStateToProps, mapDispatchToProps)(CardCollection);