import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Scoreboard from './Scoreboard';

let container;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

describe('Scoreboard.js', () => {
    it('renders properly', () => {
        act(() => {
            render(<Scoreboard propScoreboard={[{score: 1, name: 'test'}]} />, container);
        });

        const element = container.getElementsByTagName('div')[0];
        expect(element.textContent).toBe('test1.00'); 
    });

    it('renders properly with an empty scoreboard', () => {
        act(() => { 
            render(<Scoreboard propScoreboard={[]} />, container); 
        });

        const element = container.getElementsByTagName('div')[0];
        expect(element.textContent).toBe('Nothing to show. Play the game to get your score saved!'); 
    });
}); 
 