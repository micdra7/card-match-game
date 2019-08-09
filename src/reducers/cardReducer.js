import { getRandomInt, getValue } from '../utils/Helper';

const initialState = {
    cards: [],
    matchedCards: [],
    selectedCards: [],
    difficulty: 1,
    set: 1
};

const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INIT_CARDS':
            return {
                ...state,
                difficulty: action.payload.difficulty,
                set: action.payload.set,
                cards: action.payload.cards
            };
        case 'CARD_SELECTED':
            if (state.selectedCards.length === 2) {
                if (state.selectedCards[0].value === state.selectedCards[1].value) {

                    const matched = state.matchedCards.concat(state.selectedCards);

                    if (matched.length === state.cards.length) {
                        return {
                            ...state,
                            cards: [],
                            selectedCards: []
                        };
                    }

                    return {
                        ...state,
                        matchedCards: matched,
                        selectedCards: []
                    };
                } else {
                    return {
                        ...state,
                        selectedCards: []
                    };
                }
            } else {
                return {
                    ...state,
                    selectedCards: state.selectedCards
                        .concat(state.cards.filter(card => card.x === action.payload.x && card.y === action.payload.y))
                };
            }
        default:
            return state;
    }
};

export const initializeCards = (difficulty) => {
    return dispatch => {
        let cards = [];
        let values = [];
        let max;
        
        if (difficulty <= 4 && difficulty >= 1) {
            max = difficulty * 2;
        } else {
            max = 8;
            difficulty = 4;
        }
    
        for (let i = 0; i < max * difficulty; i++) {
            let random = getRandomInt(1, 100);
            values.push({val: random, useCount: 0});
        }
    
        for (let i = 0; i < max; i++) {
            for (let j = 0; j < max; j++) {
                cards.push({x: i, y: j, value: getValue(values)});
            }
        }
    
        dispatch({
            type: 'INIT_CARDS',
            payload: {
                difficulty,
                cards,
                set: difficulty
            }
        });
    };
};
 
export const select = (x, y) => {
    return {
        type: 'CARD_SELECTED',
        payload: {
            x, y
        }
    };
};

export default cardReducer;