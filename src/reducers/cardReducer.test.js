import cardReducer, { initialState, initializeCards, select, setName, setScore, resetState } from './cardReducer';

describe('Actions', () => {
    it('select action', () => {
        expect(select(0, 0)).toStrictEqual({type: 'CARD_SELECTED', payload: {x: 0, y: 0}});
    });

    it('setName action', () => {
        expect(setName('testName')).toStrictEqual({type: 'SET_NAME', payload: 'testName'});
    });

    it('setScore action', () => {
        expect(setScore(1)).toStrictEqual({type: 'SET_SCORE', payload: 1});
    });

    it('initializeCards action', () => {
        const dispatch = jest.fn();
        initializeCards(3)(dispatch);
        const args = dispatch.mock.calls[0][0];

        expect(args.type).toBe('INIT_CARDS');
        expect(args.payload.difficulty).toBe(3);
        expect(args.payload.cards.length).toBe(36);

        let uniqueValues = [];

        args.payload.cards.forEach((element) => {
            if (!uniqueValues.includes(element.value)) {
                uniqueValues.push(element.value);
            }
        });

        expect(uniqueValues.length).toBe(18);
    });

    it('resetState action', () => {
        expect(resetState()).toStrictEqual({type: 'RESET_STATE'});
    });
});

describe('CardReducer', () => {
    it('INIT_CARDS', () => {
       const state = cardReducer(initialState, {type: 'INIT_CARDS',  payload: { difficulty: 2, cards: []}});
       expect(state.difficulty).toBe(2);
       expect(state.cards.length).toBe(0);
    });

    it('SET_NAME', () => {
        const state = cardReducer(initialState, {type: 'SET_NAME', payload: 'testName'});
        expect(state.name).toBe('testName');
    });

    it('SET_SCORE', () => {
        const state = cardReducer(initialState, {type: 'SET_SCORE', payload: 1});
        expect(state.score).toBe(1);
    });

    const prevState = {
        ...initialState,
        cards: [
            {value: 1, x: 0, y: 0},
            {value: 1, x: 0, y: 1},
            {value: 2, x: 1, y: 0},
            {value: 2, x: 1, y: 1}
        ]
    };

    it('CARD_SELECTED - nothing selected before', () => {
        const state = cardReducer(prevState, {type: 'CARD_SELECTED', payload: {x: 0, y: 0}});
        expect(state.selectedCards).toContainEqual({value: 1, x: 0, y: 0});
    });

    const oneSelectedState = {
        ...prevState,
        selectedCards: [{value: 1, x: 0, y: 0}]
    };

    it('CARD_SELECTED - one selected before (mismatched values)', () => {
        const state = cardReducer(oneSelectedState, {type: 'CARD_SELECTED', payload: {x: 1, y: 0}});
        expect(state.selectedCards.length).toBe(0);
        expect(state.matchedCards.length).toBe(0)
    });

    it('CARD_SELECTED - one selected before (matching values)', () => {
        const state = cardReducer(oneSelectedState, {type: 'CARD_SELECTED', payload: {x: 0, y: 1}});
        expect(state.selectedCards.length).toBe(0);
        expect(state.matchedCards.length).toBe(2);
        expect(state.score).toBe(40);
    });

    it('CARD_SELECTED - all cards matched', () => {
        const allButOneSelectedState = {
            ...prevState,
            matchedCards: [{value: 1, x: 0, y: 0}, {value: 0, x: 0, y: 1}],
            selectedCards: [{value: 2, x: 1, y: 0}]
        };

        const state = cardReducer(allButOneSelectedState, {type: 'CARD_SELECTED', payload: {x: 1, y: 1}});
        expect(state.selectedCards.length).toBe(0);
        expect(state.cards.length).toBe(0);
        expect(state.matchedCards.length).toBe(0);
        expect(state.score).toBe(40);
    });

    it('RESET_STATE', () => {
        const state = cardReducer(initialState, {type: 'RESET_STATE'});
        expect(state).toStrictEqual(initialState);
    });
});

