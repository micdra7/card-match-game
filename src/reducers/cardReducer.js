const initialState = {
    cards: [],
    difficulty: 1,
    set: 1
};

const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GAME_STARTED':
            return {
                ...state,
                difficulty: action.payload.difficulty,
                set: action.payload.set
            };
        case 'PAIR_MATCHED': 
            return {
                ...state,
                cards: cards.filter(card => card === action.payload.card)
            };
        default:
            return state;
    };
};