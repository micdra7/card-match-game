import React from 'react';
import { Redirect } from 'react-router-dom';
import Card from '../Card/Card';
import './CardCollection.scss';

export const CardCollection = ({ cards, matchedCards, selectedCards, difficulty, select, cardIcons, stateUpdated }) => {

    const renderedContent = cards.length === 0 && stateUpdated ? <Redirect to="/scoreboard/input" /> : cards.map((card, index) => {
        const cardClassName = matchedCards.includes(card) ? 'card invisible' : selectedCards.includes(card) ? 'card visible' : 'card';
        const handleClick = matchedCards.includes(card) ? () => {} : () => select(card.x, card.y);
        const cardStyle = {width: `${100/(difficulty*2)}%`, height: `${100/(difficulty*2)}%`};
        
        return (
            <Card style={cardStyle} key={card.value * index + difficulty} value={cardIcons[card.value]} handleClick={handleClick} className={cardClassName} />
        );
    });

    let gridForDifficulty = '';

    for (let i = 0; i < difficulty * 2; i++) {
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

export default CardCollection;