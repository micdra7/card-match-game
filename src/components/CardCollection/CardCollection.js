import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { smallBreakpoint, mediumBreakpoint } from '../../utils/Helper';
import Card from '../Card/Card';
import './CardCollection.scss';

export const CardCollection = ({ cards, matchedCards, selectedCards, difficulty, select, cardIcons, stateUpdated, selectAfterTimeout }) => {

    const [windowWidth, setWindowWidth] = useState(0);
    const [renderedContent, setRenderedContent] = useState([]);
    const [style, setStyle] = useState({});
    const [prevSelected, setPrevSelected] = useState([]);

    useEffect(() => {
        const updateWindowWidth = () => {
            setWindowWidth(window.innerWidth);
        };

        updateWindowWidth();

        return updateWindowWidth;
    }, []);

    useEffect(() => {
        const cardSizeDesktop = [100, 80, 60, 40];
        const cardSizeTablet = [100, 70, 55, 40];
        const cardSizeMobile = [100, 55, 35, 25];

        setRenderedContent(
            cards.length === 0 && stateUpdated ? <Redirect to="/scoreboard/input" /> : cards.map((card, index) => {
                const handleClick = matchedCards.includes(card) || selectedCards.includes(card) ? () => {} : 
                    () => {
                        select(card.x, card.y);
                        const prev = prevSelected.concat(card);
                        setPrevSelected(prev);
                        
                        if (prev.length === 2) {
                            setTimeout(() => {
                                setPrevSelected([]);
                            }, 1000);
                            selectAfterTimeout(-1, -1, 1000);
                        }
                    };
                const cardSize = windowWidth <= smallBreakpoint ? cardSizeMobile[difficulty - 1] :
                                    (windowWidth <= mediumBreakpoint ? cardSizeTablet[difficulty - 1] : cardSizeDesktop[difficulty - 1]);
                let cardClass = (matchedCards.includes(card) ? 'card matched' : 
                                    (selectedCards.includes(card) ? 'card selected' : 'card'));

                
                if (cardClass === 'card selected' && prevSelected.length === 0) {
                    cardClass = 'card to-hide';
                }

                return (
                    <Card key={card.value * index + difficulty} value={cardIcons[card.value]} 
                        handleClick={handleClick} className={cardClass} cardSize={cardSize} />
                );
            })
        );

        let gridForDifficulty = '';

        for (let i = 0; i < difficulty * 2; i++) {
            gridForDifficulty += `${(100 / ( difficulty * 2)).toFixed(2)}% `;
        }
    
        setStyle({
            gridTemplateColumns: gridForDifficulty,
            gridTemplateRows: gridForDifficulty
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cards, selectedCards, matchedCards]);

    

    return (
        <div className="card-collection" style={style}>
            {renderedContent}
        </div>
    );
};

export default CardCollection;