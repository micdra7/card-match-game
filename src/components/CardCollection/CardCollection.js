import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { smallBreakpoint, mediumBreakpoint } from '../../utils/Helper';
import Card from '../Card/Card';
import './CardCollection.scss';

export const CardCollection = ({ cards, matchedCards, selectedCards, difficulty, select, cardIcons, stateUpdated, selectAfterTimeout }) => {

    const [windowWidth, setWindowWidth] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0);
    const [renderedContent, setRenderedContent] = useState([]);
    const [style, setStyle] = useState({});
    const [prevSelected, setPrevSelected] = useState([]);

    useEffect(() => {
        const updateWindowDimensions = () => {
            setWindowWidth(window.innerWidth);
            setWindowHeight(window.innerHeight);
        };

        updateWindowDimensions();

        return updateWindowDimensions;
    });

    useEffect(() => {
        const cardSizeDesktop = [100, 80, 60, 40];
        const cardSizeTablet = [100, 70, 50, 35];
        const cardSizeMobile = [100, 55, 35, 25];

        setRenderedContent(
            cards.length === 0 && stateUpdated ? <Redirect to="/scoreboard/input" /> : cards.map((card, index) => {

                let cardClass = (matchedCards.includes(card) ? 'card matched' : 
                    (selectedCards.includes(card) ? 'card selected' : 
                    (prevSelected.includes(card) ? 'card to-hide' : 'card')));

                const handleClick = matchedCards.includes(card) || selectedCards.includes(card) ? () => {} : 
                    () => {
                        select(card.x, card.y);
                        let prev = prevSelected.concat(card);

                        if (prev.length > 2) {
                            prev = prev.slice(2);
                        }

                        setPrevSelected(prev);
                        
                        if (prev.length === 2) {
                            if (prev[0].value !== prev[1].value) {
                                cardClass = 'card to-hide';
                                selectAfterTimeout(-1, -1, 500);
                            }
                        }
                    };

                let cardSize = windowWidth <= smallBreakpoint ? cardSizeMobile[difficulty - 1] :
                                    (windowWidth <= mediumBreakpoint ? cardSizeTablet[difficulty - 1] : cardSizeDesktop[difficulty - 1]);
                                    
                if (windowWidth > windowHeight && 
                        (windowWidth <= mediumBreakpoint || windowHeight <= mediumBreakpoint)) {
                    cardSize -= (windowWidth <= smallBreakpoint || windowHeight <= smallBreakpoint ? 20 : 15);
                }

                return (
                    <Card key={card.value * index + difficulty + index} value={cardIcons[card.value]} 
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

        return () => {
            if (prevSelected.length >= 2) {
                setPrevSelected([]);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cards, selectedCards, matchedCards, windowWidth]);

    

    return (
        <div className="card-collection" style={style}>
            {renderedContent}
        </div>
    );
};

export default CardCollection;