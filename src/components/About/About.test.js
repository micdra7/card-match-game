import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import About from './About';

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

describe('About.js', () => {
    it('renders properly', () => {
        act(() => {
            render(<About />, container);
        });
        expect(container.textContent).toBe('Card matching gameMade by Michal Drabik');
        expect(container.getElementsByTagName('svg').length).toBe(2);
    }); 
}); 