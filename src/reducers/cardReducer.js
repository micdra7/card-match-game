import { getRandomInt, getValue } from '../utils/Helper';

const initialState = {
    cards: [],
    matchedCards: [],
    selectedCards: [],
    time: 0,
    difficulty: 1,
    set: 1,
    score: 0,
    name: ''
};

const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INIT_CARDS':
            return {
                ...state,
                difficulty: action.payload.difficulty,
                set: action.payload.set,
                cards: action.payload.cards,
                time: Date.now()
            };
        case 'CARD_SELECTED': {
            const selected = state.selectedCards.concat(state.cards.filter(card => card.x === action.payload.x && card.y === action.payload.y));

            if (selected.length === 2) {
                if (selected[0].value === selected[1].value) {

                    const matched = state.matchedCards.concat(selected);

                    if (matched.length === state.cards.length) {
                        return {
                            ...state,
                            score: state.score += 40,
                            cards: [],
                            selectedCards: [],
                            matchedCards: []
                        };
                    }

                    return {
                        ...state,
                        score: state.score += 40,
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
                    selectedCards: selected
                };
            }
        }
        case 'SET_NAME':
            return {
                ...state,
                name: action.payload
            };
        case 'SET_SCORE':
            return {
                ...state,
                score: action.payload
            };
        default:
            return state;
    }
};

export const initializeCards = (difficulty) => {
    return dispatch => {
        let cards = [];
        let values = [];
        let uniqueRandomInts = [];
        let max;
        
        if (difficulty <= 4 && difficulty >= 1) {
            max = difficulty * 2;
        } else {
            max = 8;
            difficulty = 4;
        }
    
        for (let i = 0; i < max * difficulty; i++) {
            let random;

            do  {
                random = getRandomInt(0, 32);
            } while (uniqueRandomInts.indexOf(random) !== -1);
            
            values.push(random);
            uniqueRandomInts.push(random);
        }
        debugger;
        values = values.concat(values);
        for (let i = 0; i < max; i++) {
            for (let j = 0; j < max; j++) {
                cards.push({x: i, y: j, value: getValue(values)});
                
                values.splice(values.indexOf(cards[cards.length - 1].value), 1);
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

export const setScore = (score) => {
    return {
        type: 'SET_SCORE',
        payload: score
    };
};

export const setName = (name) => {
    return {
        type: 'SET_NAME',
        payload: name
    };
};

export default cardReducer;