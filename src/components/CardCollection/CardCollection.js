import React from 'react';
import { connect } from 'react-redux';
import { select } from '../../reducers/cardReducer';
import Card from '../Card/Card';
import './CardCollection.scss';

const CardCollection = (props) => {
    const cards = props.visibleCards.map(card => <Card key={card.value} value={card.value} set={props.set} handleClick={() => props.select(card.x, card.y)} />);

    return (
        <div className="card-collection">
            {cards}
        </div>
    );
};

const cardsToShow = ({ cards, matchedCards }) => {
    if (matchedCards.length === 0) {
        return cards;
    }

    return cards.filter(card => {
        if (matchedCards.indexOf(card) !== -1) {
            card.value = 0;
        }
    });
};

const mapStateToProps = (state) => {
    return {
        visibleCards: cardsToShow(state),
        set: state.set
    };
};

const mapDispatchToProps = {
    select
};

export default connect(mapStateToProps, mapDispatchToProps)(CardCollection);